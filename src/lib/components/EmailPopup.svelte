<script lang="ts">
    export let type: string;
    export let visible: boolean;

    export let interest = "";
    export let choices = {};

    function closePopup() {
        visible = false;
    }

    let form: App.StandardMailRequest | App.InterestMailRequest | any = {};

    if (interest != "") {
        form.interest = interest;
        form.type = "Interest";
    } else {
        form.type = "Standard";
    }

    const submit = () => {
        let valid: Array<string> | boolean = true;
        if (form.type == "Interest") valid = validate_interest();
        else if (form.type == "Standard") valid = validate_standard();

        if (valid != true) {
            for (let i = 0; i < valid.length; i++) {
                let element = document.getElementById("form_" + valid[i]);
                if (element) element.style.borderColor = "red";
            }
            return;
        }

		fetch("/api/gmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form)
		});
        let contents = document.getElementById("popupContents")
        if (contents) contents.style.top = "700px";
	};

    const check_email = (email: string) => {
        return /^(?:[a-z0-9!#$%&'*+.=?^_`{|}~-]+|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+")@[a-zA-Z0-9-]{1,256}\.[a-zA-Z0-9-]{2,6}$/gi.test(email);
    }
    const check_phone = (phone: string) => {
        return /^([0-9]{10})|^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/gi.test(phone);
    }

    const validate_interest = () => {
        let unfilled = [];
        if (!form.name) unfilled[unfilled.length] = "name";
        if (!(form.email && check_email(form.email))) unfilled[unfilled.length] = "email";
        if (form.phone && !check_phone(form.phone)) unfilled[unfilled.length] = "phone";
        if (!form.goals) unfilled[unfilled.length] = "goals";
        if (!form.when) unfilled[unfilled.length] = "when";
        if (unfilled.toString() == [].toString()) return true;
        return unfilled;
    }
    const validate_standard = () => {
        let unfilled = [];
        if (!form.name) unfilled[unfilled.length] = "name";
        if (!(form.email && check_email(form.email))) unfilled[unfilled.length] = "email";
        if (form.phone && check_phone(form.phone)) unfilled[unfilled.length] = "phone";
        if (!form.subject) unfilled[unfilled.length] = "subject";
        if (!form.body) unfilled[unfilled.length] = "body";
        if (unfilled.toString() == [].toString()) return true;
        return unfilled;
    }

    const input_fill = (input: string) => {
        let element = document.getElementById("form_" + input);
        if (element) element.style.borderColor = "";
    }
</script>

<style>
    #popup {
        transition: 0.5s;
        background-color: rgba(0,0,0,.75);
        font-family: arial, sans-serif;
        height: 100%;
        position: fixed;
        text-align: left;
        top: 0;
        width: 100%;
        z-index: 2000;
    }
    #popupBox {
        display: table;
        vertical-align: middle;
        -webkit-transition: 0.5s ease;
        -moz-transition: 0.5s ease;
        -o-transition: 0.5s ease;
        transition: 0.5s ease;
        background-color: rgb(150,150,155);
        width: 70%;
        min-width: 350px;
        max-width: 600px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        overflow: hidden;
        color: black;
    }
    #popupBox h1 {
        text-align: center;
        margin-bottom: 0;
    }
    #popupBox img {
        height: 100%;
        filter: blur(4px);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
    #popupCloseButton {
        font-family: "Playfair Display", serif;
        background: transparent;
        border: none;
        transition: 0.5s;
        color: inherit;
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 60px;
        line-height: 30px;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    #popupContents {
        margin-inline: 15px;
        overflow: auto;
        transition: 1s;
        transition-delay: 0.5s;
        position: relative;
        top: 0px;
        background: inherit;
        z-index: 1;
    }
    #emailSuccess {
        transition: 1s;
        transition-delay: 0.5s;
        position: absolute;
        top: 40%;
    }
    #emailSuccess h1 {
        padding-inline: 20px;
    }
    #popupContents h3 {
        margin-bottom: 0.75rem;
        color: black;
        position: relative;
    }
    #popupContents h3 span {
        position: absolute;
        right: 5px;
        top: 50%;
        scale: 2;
        width: fit-content;
    }
    #popupContents input, #popupContents textarea {
        color: black;
        font-size: 1.25rem;
        line-height: 1.25em;
        resize: none;
        background: white;
        border: 2px solid rgb(255,255,255,0.5);
        border-radius: 5px;
    }
    #popupContents input:focus-visible, #popupContents textarea:focus-visible {
        outline: none;
        background: rgb(255,255,255,0.35);
        border: 2px solid rgb(255,255,255,0.75);
    }
    #popupContents button {
        margin-block: 20px;
        padding: 7px;
        border-radius: 7px;
        width: 100%;
        background: transparent;
        border: 2px solid rgb(255,255,255,0.75);
        color: black;
        font-size: 1em;
        overflow: hidden;
        position: relative;
        transition: 0.5s;
        z-index: 2;
    }
    #popupContents button:hover, #popupContents button:focus-visible {
        background: white;
        color: black;
        border: 2px solid rgb(255,255,255);
        border-radius: 2px;
        outline: none;
    }
    #popupContents button span {
        transition: 0.5s;
        z-index: -1;
        height: 100%;
        width: 0;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.5;
    }
    #popupContents button:hover span, #popupContents button:focus-visible span {
        width: 100%;
        opacity: 1;
    }
    #popupContents * {
        width: calc(100% - 8px);
    }
</style>

<div id="popup">
    <!-- svelte-ignore missing-declaration -->
    <div id="popupBox" style="height:500px">
        <button id="popupCloseButton" on:click={closePopup}>&times;</button>
        <h1>{interest} {type} Form</h1>
        <div id="popupContents">
            <h3>Name<span>*</span></h3>
            <input id="form_name" on:change={() => input_fill("name")} bind:value={form.name}>
            <h3>Email<span>*</span></h3>
            <input id="form_email" on:change={() => input_fill("email")} bind:value={form.email}>
            <h3>Phone Number</h3>
            <input id="form_phone" on:change={() => input_fill("phone")} bind:value={form.phone}>
            {#if type == "Standard"}
                <h3>Subject<span>*</span></h3>
                <input id="form_subject" on:change={() => input_fill("subject")} bind:value={form.subject}>
                <h3>Body<span>*</span></h3>
                <textarea id="form_body" on:change={() => input_fill("body")} bind:value={form.body} rows=4></textarea>
            {/if}
            {#if type == "Interest"}
                <h3>Tell us about your goals<span>*</span></h3>
                <textarea id="form_goals" on:change={() => input_fill("goals")} bind:value={form.goals} rows=4></textarea>
                <h3>What days/times are best?<span>*</span></h3>
                <textarea id="form_when" on:change={() => input_fill("when")} bind:value={form.when} rows=4></textarea>
            {/if}
            <button on:click={submit}>Send<span></span></button>
        </div>
        <div id="emailSuccess">
            <h1>Thanks! We'll get back to you shortly.</h1>
        </div>
    </div>
</div>