const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", fDarkMode);

function fDarkMode() {
  const styledark = document.getElementById("style");
  const istorieStyledark = document.getElementById("istorie-style");
  styledark.href = "./style/styledark.css";
  istorieStyledark.href = "./style/styledark-istorie.css";
}

const whiteMode = document.getElementById("whitemode");
whiteMode.addEventListener("click", fWhiteMode);

function fWhiteMode() {
  const istorieStylewhite = document.getElementById("istorie-style");
  const stylewhite = document.getElementById("style");
  istorieStylewhite.href = "./style/style-istorie.css";
  stylewhite.href = "./style/style.css";
}
function learnMoreHistory() {
  let learnMoreHistory = document.getElementById("learnMoreHistory");
  let btnText = document.getElementById("btnLeanrMoreHystory");
  if (learnMoreHistory.style.display === "inline") {
    learnMoreHistory.style.display = "none";
    btnText.innerHTML = "Citeste mai mult";
  } else {
    learnMoreHistory.style.display = "inline";

    btnText.innerHTML = "Ascunde";
  }
}
