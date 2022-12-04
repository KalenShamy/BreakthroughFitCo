import { error } from "@sveltejs/kit";
import { gmail } from "@googleapis/gmail";
import { OAuth2Client } from "googleapis-common";

import { env } from "$env/dynamic/private";

import type { RequestHandler } from "./$types";

// Request handler for managing form submission from the contact form and inserting them into Gmail

const auth = new OAuth2Client({
	clientId: env.GOOGLE_ID,
	clientSecret: env.GOOGLE_SECRET,
	redirectUri: "localhost:3000"
});

function makeHTMLSafe(str: string) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\n/g, '<br>');
}

auth.setCredentials({
	refresh_token: env.GOOGLE_REFRESH
});

const mail = gmail({ version: "v1", auth: auth });

// Insert an email into the hello@ai-camp.org account for contact form submissions
// * INPUT: MailRequest
// * OUTPUT: MailResponse
export const POST: RequestHandler = async ({ request }: any) => {
	try {
		const data: App.StandardMailRequest | App.InterestMailRequest = await request.json();

		let formattedData = {
			type: makeHTMLSafe(data.type),
			name: makeHTMLSafe(data.name),
			email: makeHTMLSafe(data.email),
			phone: "not provided",
			subject: "",
			body: ""
		}

		if (data.phone) {
			formattedData.phone = makeHTMLSafe(data.phone);
		}

		if (data.type == "Standard") {
			formattedData.subject = makeHTMLSafe(data.subject);
			formattedData.body = makeHTMLSafe(data.body)
		} else if (data.type == "Interest") {
			formattedData.subject = "Interest - " + data.interest;
			formattedData.body = `
				<b>Interest:</b> ${makeHTMLSafe(data.interest)}
				<b>Client goals:</b><br><div style='width:calc(100% - 24px);background-color:rgb(235,235,235);border-radius:10px;color:rgb(21,21,21);padding:10px;border:2px solid transparent;'>${data.goals}</div>
				<b>Client availability:</b><br><div style='width:calc(100% - 24px);background-color:rgb(235,235,235);border-radius:10px;color:rgb(21,21,21);padding:10px;border:2px solid transparent;'>${data.when}</div>
			`.trim().replaceAll("\t","").replaceAll("\n","<br>");
		}

		// Create raw data for the email with the proper header information and a custom
		// HTML template
		const raw = Buffer.from(
			`Delivered-To: trainedbyjake@gmail.com
			Return-Path: <jake@breakthroughfitco.com>
			From: <${formattedData.email}>
			Reply-To: <jake@breakthroughfitco.com>
			To: <trainedbyjake@gmail.com>
			Subject: ${formattedData.subject}
			MIME-Version: 1.0
			Content-Type: text/html; charset=us-ascii
			<!DOCTYPE html>
				<html>
					<head>
						<meta charset="UTF-8">

					</head>
					<body>
						<b>Name:</b> ${formattedData.name}<br>
						<b>Email Address:</b> ${formattedData.email}<br>
						<b>Phone Number:</b> ${formattedData.phone}<br>
						<b>Email Body:</b><br><br>${formattedData.body}
					</body>
				</html>
			`.replaceAll(/^	+/gm, "")
		).toString("base64");

		console.log(raw);

		// Insert an email into the hello@ai-camp.org email with the form data received along with a header
		// that says the email is from the provided email to provide a seamless email thread process
		mail.users.messages.insert({
			userId: "me",
			requestBody: {
				labelIds: ["INBOX", "IMPORTANT", "UNREAD"],
				raw
			}
		});
	} catch {
		throw error(400, "Bad Request");
	}

	return new Response(undefined, { status: 200 });
};
