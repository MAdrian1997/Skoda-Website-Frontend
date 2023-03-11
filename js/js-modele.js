const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", fDarkMode);

function fDarkMode() {
  const styledark = document.getElementById("style");
  const contactStyledark = document.getElementById("modele-style");
  styledark.href = "./style/styledark.css";
  contactStyledark.href = "./style/modele-darkstyle.css";
}

const whiteMode = document.getElementById("whitemode");
whiteMode.addEventListener("click", fWhiteMode);

function fWhiteMode() {
  const contactStylewhite = document.getElementById("modele-style");
  const stylewhite = document.getElementById("style");
  contactStylewhite.href = "./style/modele-style.css";
  stylewhite.href = "./style/style.css";
}

async function afisareDate() {
  const spinner = document.getElementsByClassName("spinner-border")[0];
  try {
    const raspunsDeLaServer = await fetch(
      "https://skoda-website-backend.onrender.com/afiseaza-produse"
    );
    const raspunsCaJson = await raspunsDeLaServer.json();
    for (let i = 0; i < raspunsCaJson.length; i++) {
      let divMasina =
        '<div class="card text-center" style="width: 18rem">' +
        '<img src="' +
        raspunsCaJson[i].Imagine +
        '" class="card-img-top carsImg" alt="card-img" />' +
        '<div class="card-body"> ' +
        ' <h5 class="card-title">' +
        raspunsCaJson[i].Titlul +
        "</h5> " +
        ' <p class="card-text">' +
        raspunsCaJson[i].Pret +
        "</p> " +
        " <a href=" +
        '"' +
        (raspunsCaJson[i].Link === undefined
          ? "https://www.skoda.ro"
          : raspunsCaJson[i].Link) +
        '"' +
        'class="btn btn-primary">Mai mult!</a>' +
        "</div>" +
        "</div>";

      // console.log("raspunsDeLaServer", raspunsCaJson);
      if (raspunsCaJson[i].Clasa === "Mica") {
        document.getElementById("mica").innerHTML =
          document.getElementById("mica").innerHTML + divMasina;
      } else if (raspunsCaJson[i].Clasa === "Medie") {
        document.getElementById("medie").innerHTML =
          document.getElementById("medie").innerHTML + divMasina;
      } else {
        document.getElementById("mare").innerHTML =
          document.getElementById("mare").innerHTML + divMasina;
      }
    }
  } catch (error) {
    // alert("Nu s-a incarcat, da refresh!");
  } finally {
    spinner.classList.add("visually-hidden");
  }
}
afisareDate();
