<header>
    <div id="veryTop">
      <span onclick="openNav()" id="threeBars">
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
      <a href="ignite" class="CurrentNavPage">Ignite</a>
      <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=5721621" class="NavLink" target="_blank">Client Portal</a>
    </div>
    <div id="mobileNavOverlay">
      <span id="closebtn" onclick="closeNav()">×</span>
      <div id="mobileNavBar">
        <a href="./" class="NavLink">Home</a>
        <a href="team" class="NavLink">Team</a>
        <a href="services" class="NavLink">Services</a>
        <a href="ignite" class="CurrentNavPage">Ignite</a>
        <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=5721621" class="NavLink" target="_blank">Client Portal</a>
      </div>
    </div>
  </header>
  <slot />
  <footer>
    <p id="copyright">Copyright © 2022 Breakghrough Fit Co - All Rights Reserved.</p>
    <p id="credit">Created by Kalen Shamy</p>
  </footer>