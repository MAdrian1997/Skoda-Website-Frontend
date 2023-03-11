const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", fDarkMode);

function fDarkMode() {
  const styledark = document.getElementById("style");
  const homeStyledark = document.getElementById("home-style");
  styledark.href = "./style/styledark.css";
  homeStyledark.href = "./style/home-darkstyle.css";
}

const whiteMode = document.getElementById("whitemode");
whiteMode.addEventListener("click", fWhiteMode);

function fWhiteMode() {
  const homeStylewhite = document.getElementById("home-style");
  const stylewhite = document.getElementById("style");
  homeStylewhite.href = "./style/home-style.css";
  stylewhite.href = "./style/style.css";
}

function learnMore() {
  let dots = document.getElementById("dots");
  let learnMore = document.getElementById("learnMore");
  let btnText = document.getElementById("btnLeanrMore");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Citeste mai mult";
    learnMore.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ascunde";
    learnMore.style.display = "inline";
  }
}
