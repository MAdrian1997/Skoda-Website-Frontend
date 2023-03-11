const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", fDarkMode);

function fDarkMode() {
  const styledark = document.getElementById("style");
  const contactStyledark = document.getElementById("contact-style");
  styledark.href = "./style/styledark.css";
  contactStyledark.href = "./style/contact-darkstyle.css";
}

const whiteMode = document.getElementById("whitemode");
whiteMode.addEventListener("click", fWhiteMode);

function fWhiteMode() {
  const contactStylewhite = document.getElementById("contact-style");
  const stylewhite = document.getElementById("style");
  contactStylewhite.href = "./style/contact-style.css";
  stylewhite.href = "./style/style.css";
}

const forms = document.querySelector(".needs-validation");
forms.addEventListener("submit", (event) => {
  if (!forms.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    buttonClick();
  }
  forms.classList.add("was-validated");
});

const buttonSubmit = document.getElementsByClassName("btncontact")[0];

const buttonClick = function buttonClick() {
  const nameContact = document.getElementById("contact-name").value;
  const prenumeContact = document.getElementById("contact-prenume").value;
  const emailContact = document.getElementById("contact-email").value;
  const textareaContact = document.getElementById("contact-textarea").value;
  const formData = {
    nameContact,
    prenumeContact,
    emailContact,
    textareaContact,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(formData),
  };

  fetch("https://skoda-website-backend.onrender.com/contact", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
