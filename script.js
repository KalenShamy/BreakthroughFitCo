/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mobileNavOverlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileNavOverlay").style.width = "0%";
}

function closePopup() {
  document.getElementById("popup").style["background-color"] = "rgba(0,0,0,0)";
  document.getElementById("popupBox").style.width = "0%";
  document.getElementById("popupBox").style.display = "block";
  document.getElementById("popupCloseButton").style["font-size"] = "0px";
  setTimeout(function(){
    document.getElementById("popup").style.display = "none"
  }, 500);
}
