<script lang="ts">
    let mobileNavOverlay: HTMLDivElement | undefined;

    function openNav() {
        if (mobileNavOverlay) {
            mobileNavOverlay.style.width = "100%";
        }
    }

    function closeNav() {
        if (mobileNavOverlay) {
            mobileNavOverlay.style.width = "0%";
        }
    }
</script>

<header>
    <div id="veryTop">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={openNav} id="threeBars">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 35px; position: relative; left: 12px;">
                <path fill-rule="evenodd" d="M19 8H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2zm0 5.097H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 5.25H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"></path>
            </svg>
        </span>
        <a href="./" id="logoWrapper"><img loading="lazy" alt="Breakthrough Fit Co logo" src="Pictures/BFC-logo.webp" id="logo"></a>
        <div id="emptySpacing"></div>
    </div>
    <div id="navBar">
        <a href="./" class="NavLink">Home</a>
        <a href="team" class="NavLink">Team</a>
        <a href="services" class="NavLink">Services</a>
        <a href="ignite" class="NavLink">Ignite</a>
        <a href="events" class="NavLink">Events</a>
        <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=5721621" class="NavLink" target="_blank" rel="noreferrer">Portal</a>
    </div>
    <div id="mobileNavOverlay" bind:this={mobileNavOverlay}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span id="closebtn" on:click={closeNav}>×</span>
        <div id="mobileNavBar">
            <a href="./" class="NavLink" on:click={closeNav}>Home</a>
            <a href="team" class="NavLink" on:click={closeNav}>Team</a>
            <a href="services" class="NavLink" on:click={closeNav}>Services</a>
            <a href="ignite" class="NavLink" on:click={closeNav}>Ignite</a>
            <a href="events" class="NavLink" on:click={closeNav}>Events</a>
            <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=5721621" class="NavLink" target="_blank" rel="noreferrer">Portal</a>
        </div>
    </div>
</header>
<slot />
<footer>
    <p id="copyright">Copyright © 2022 Breakghrough Fit Co - All Rights Reserved.</p>
    <a id="credit" href="https://createdbykalen.com" target="_blank" rel="noreferrer">Created by Kalen</a>
</footer>