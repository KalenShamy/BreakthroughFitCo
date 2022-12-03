// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
	declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}

	enum MailTypes {
		Standard = "Standard",
		Interest = "Interest",
	}

	interface StandardMailRequest {
		type: MailTypes.Standard;
		name: string;
		email: string;
		phone?: string;
		subject: string;
		body: string;
	}

	interface InterestMailRequest {
		type: MailTypes.Interest;
		subject: string;
		name: string;
		email: string;
		phone?: string;
		interest: string;
		choice: string;
		when?: string;
	}

	// Interface for contact form response data
	interface MailResponse {
		success: boolean;
	}
}