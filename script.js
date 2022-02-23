
/* Created by Kalen Shamy */

function openNav() {
  document.getElementById("mobileNavOverlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileNavOverlay").style.width = "0%";
}

function closePopup() {
  document.getElementById("popup").style.display = "none"
}

function setup() {
  if (window.location.pathname.indexOf("about") != -1) {
    // about page
    for (let i = 0; i < staff.length; i++) {
      let memberDiv = "";
      memberDiv += "<!-- " + staff[i]["name"] + "-->\n";
      memberDiv += "<div class=\"teamMember\">\n";
      memberDiv += "<img loading=\"lazy\" src=\"Pictures/" + staff[i]["img"] + "\">\n";
      memberDiv += "<div class=\"teamMemberText\">\n";
      memberDiv += "<h1 class=\"teamMemberName\">" + staff[i]["name"] + " - " + staff[i]["title"] + "</h1>\n";
      memberDiv += "<p>" + staff[i]["bio"] + "</p>\n";
      if (staff[i]["certifications"] != undefined) {
        memberDiv += "<h1 class=\"teamMemberName\">Certifications</h1>\n";
        let certs = "";
        for (let certsI = 0; certsI < staff[i]["certifications"].length; certsI++) {
          certs += staff[i]["certifications"][certsI];
          if (certsI+1 != staff[i]["certifications"].length) {
            certs += " - ";
          }
        }
        memberDiv += "<p>" + certs + "</p>\n";
      }
      memberDiv += "<a class=\"greyButton\" target=\"_blank\" href=\"mailto:" + staff[i]["email"] + "?subject=Breakthrough%20Fit%20Co\">Contact</a>\n";
      memberDiv += "</div>\n";
      memberDiv += "</div>\n";
      document.getElementById("teamContents").innerHTML += memberDiv;
    }
  }
}

window.onload = setup;
