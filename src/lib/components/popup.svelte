<script lang="ts">
    import { clickOutside } from '$lib/clickOutside'
</script>

<style>
    #popup {
        transition: 0.5s;
        background-color: rgba(0,0,0,.5);
        height: 100%;
        position: fixed;
        text-align: center;
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
        transition: 0.5s;
        color: black;
        position: absolute;
        top: 2.5%;
        right: 2.5%;
        font-size: 60px;
        line-height: 50px;
        width: 10%;
        height: 10%;
        cursor: pointer;
    }
    #popupContents {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-height: 100%;
    }
    #popupContents h1 {
        color: rgb(254, 202, 67);
        text-shadow: 2.5px 3px rgb(178, 128, 0);
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        font-size: 40px;
        margin: 0 0 1.25em 0;
        line-height: 45px;
    }
    #popupContents p {
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
    }
    #popupContents a:hover {
        text-decoration: underline;
    }
</style>

<div id="popup">
    <!-- svelte-ignore missing-declaration -->
    <div id="popupBox" style="height:500px" use:clickOutside on:click_outside={closePopup}>
      <span id="popupCloseButton" onclick={closePopup}>×</span>
      <div id="popupContents">
          <h1>Let's Celebrate</h1>
          <h1 style="margin-bottom:1em;">Let's Celebrate, TODAY!!!</h1>
          <p style="font-size:20px;">Join us at our<br><font style="font-weight:700">ONE YEAR ANNIVERSARY</font></p>
          <p style="font-size:25px;margin-block:1em;">September 10, 2022<br>5 - 8 PM</p>
          <p style="font-size:25px;margin-block:1em;">TODAY, at 5 - 8 PM</p>
          <p style="margin-bottom:1em">Live DJ, Food, Wine, and Giveaways</p>
          <a href="directions" target="_blank">251 S Central Ave, Hartsdale, NY 10530</a>
          <a style="font-size:25px;font-family:'Open Sans',sans-serif;font-weight:700;margin-top:1em" href="mailto:jake@breakthroughfitco.com?subject=RSVP" target="_blank">RSVP NOW</a>
          <a style="font-size:25px;font-family:'Open Sans',sans-serif;font-weight:700;margin-top:1em" href="mailto:jake@breakthroughfitco.com?subject=RSVP%20-%20One%20Year%20Anniversary" target="_blank">RSVP NOW</a>
      </div>
    </div>
  </div>