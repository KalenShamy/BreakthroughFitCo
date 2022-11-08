<script lang="ts">
    export let type: string;
    export let visible: boolean;

    export let interest = "";
    export let choices = {};

    function closePopup() {
        visible = false;
    }

    let form = {}
</script>

<style>
    #popup {
        transition: 0.5s;
        background-color: rgba(0,0,0,.5);
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
        background-color: white;
        width: 70%;
        min-width: 350px;
        max-width: 600px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 15px;
    }
    #popupBox a {
        text-decoration: none;
        color: black;
    }
    #popupCloseButton {
        font-family: "Playfair Display", serif;
        transition: 0.5s;
        color: black;
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
        width: calc(100% - 65px);
        margin-inline: 15px;
        overflow: auto;
    }
    #popupContents h1 {
        text-align: center;
        margin-bottom: 0;
    }
    #popupContents h3 {
        margin-bottom: 0.75rem;
    }
    #popupContents input, #popupContents textarea {
        line-height: 1.25rem;
    }
    #popupContents * {
        width: calc(100% - 8px);
    }
</style>

<div id="popup">
    <!-- svelte-ignore missing-declaration -->
    <div id="popupBox" style="height:500px">
        <span id="popupCloseButton" on:click={closePopup}>×</span>
        <div id="popupContents">
            <h1>{interest} {type} Form</h1>
            <h3>Name</h3>
            <input bind:value={form["name"]}>
            <h3>Email</h3>
            <input bind:value={form["email"]}>
            <h3>Phone Number</h3>
            <input bind:value={form["phone"]}>
            {#if type == "Standard"}
                <h3>Subject</h3>
                <input bind:value={form["subject"]}>
                <h3>Body</h3>
                <textarea bind:value={form["body"]} rows=4></textarea>
            {/if}
            {#if type == "Interest"}
                <h3>What days/times are best?</h3>
                <textarea bind:value={form["when"]} rows=4></textarea>
            {/if}
            <p>Send</p>
        </div>
    </div>
</div>