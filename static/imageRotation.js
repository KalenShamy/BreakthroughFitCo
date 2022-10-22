const imageCount = 7;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var currentImg = 1;

async function imageChange(num) {
  if (num == currentImg) return;

  for (let i = 1; i <= imageCount; i++) {
    if (i != num && i != currentImg) {
      document.getElementById("WB" + i).style.backgroundColor = "";
      document.getElementById("WI" + i).style.opacity = 1;
      document.getElementById("WI" + i).style.display = "none";
    }
  }

  document.getElementById("WB" + currentImg).style.backgroundColor = "";
  document.getElementById("WB" + num).style.backgroundColor = "rgb(175,175,175)";

  document.getElementById("WI" + currentImg).style.opacity = 0;
  document.getElementById("WI" + num).style.opacity = 0;
  await sleep(500);
  document.getElementById("WI" + currentImg).style.display = "none";
  document.getElementById("WI" + currentImg).style.opacity = 1;

  document.getElementById("WI" + num).style.display = "block";
  await sleep(250);
  document.getElementById("WI" + num).style.opacity = 1;
  currentImg = num;
}

function lastImage() {
  if (currentImg == 1) imageChange(imageCount);
  else imageChange(currentImg-1);
}

function nextImage() {
  if (currentImg == imageCount) imageChange(1);
  else imageChange(currentImg+1);
}

function startRotation() {
  document.getElementById("WB1").style.backgroundColor = "rgb(175,175,175)";
  setInterval(nextImage, 5 * 1000);
}

window.onload = startRotation;
