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
		fetch("/api/gmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form)
		});
	};
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
    }
    #popupContents h3 {
        margin-bottom: 0.75rem;
        color: black;
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
        <span id="popupCloseButton" on:click={closePopup}>&times;</span>
        <h1>{interest} {type} Form</h1>
        <div id="popupContents">
            <h3>Name</h3>
            <input bind:value={form.name}>
            <h3>Email</h3>
            <input bind:value={form.email}>
            <h3>Phone Number</h3>
            <input bind:value={form.phone}>
            {#if type == "Standard"}
                <h3>Subject</h3>
                <input bind:value={form.subject}>
                <h3>Body</h3>
                <textarea bind:value={form.body} rows=4></textarea>
            {/if}
            <h3>Tell us about your goals</h3>
            <textarea bind:value={form.goals} rows=4></textarea>
            {#if type == "Interest"}
                <h3>What days/times are best?</h3>
                <textarea bind:value={form.when} rows=4></textarea>
            {/if}
            <button on:click={submit}>Send<span></span></button>
        </div>
    </div>
</div>