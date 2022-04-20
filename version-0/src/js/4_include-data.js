"use strict";
////que se envien los datos del formulario y se previsualicen en la tarjeta
//
const dataContainer = document.querySelector(".js-stuffed-form");
const paintName = document.querySelector(".js-name");
const paintJob = document.querySelector(".js-profession");
const paintEmail = document.querySelector(".js-email");
const paintPhone = document.querySelector(".js-phone");
const paintLinkedin = document.querySelector(".js-linkedin");
const paintGit = document.querySelector(".js-git");
const allRadios = document.querySelectorAll(".js_radio");
let valueInputRadio = "";
const inputName = document.querySelector(".js-forname");
const inputJob = document.querySelector(".js-forjob");
const inputImage = document.querySelector(".js-forimage");
const inputMail = document.querySelector(".js-formail");
const inputPhone = document.querySelector(".js-forphone");
const inputLkdn = document.querySelector("js-forlkdn");
const inputGit = document.querySelector(".js-forgit");

function paintData() {
  if (data.name === "") {
    paintName.textContent = "Nombre Apellido";
  } else {
    paintName.innerHTML = data.name;
  }
  if (data.job === "") {
    paintJob.textContent = "Front-end developer";
  } else {
    paintJob.innerHTML = data.job;
  }
  paintEmail.href = `mailto:${data.email}`;
  paintPhone.href = `tel:${data.phone}`;
  paintLinkedin.href = data.linkedin;
  paintGit.href = data.github;

  if (data.photo === "") {
    profileImage.classList.add("preview-card__image");
  } else {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  valueInputRadio = data.palette;

  setLocalStorage();
}

function handleKeyData(event) {
  const elementTyping = event.target;
  if (elementTyping.name === "name") {
    data.name = elementTyping.value;
  }
  //else if (elementTyping.value === 'palette2'){
  // data.palette = elementTyping.value;
  //}
  else if (elementTyping.name === "profession") {
    data.job = elementTyping.value;
  }
  //
  //else if (elementTyping.name === 'image'){
  //  data.photo = elementTyping.value;
  //}
  else if (elementTyping.name === "email") {
    data.email = elementTyping.value;
  } else if (elementTyping.name === "phone") {
    data.phone = elementTyping.value;
  } else if (elementTyping.name === "Linkedin") {
    data.linkedin = elementTyping.value;
  } else if (elementTyping.name === "GitHub") {
    data.github = elementTyping.value;
  }

  paintData();
}

function handleAllRadios(event) {
  const valueInputRadio = parseInt(event.target.value);
  console.log(valueInputRadio);
  return valueInputRadio;
}

for (const eachRadio of allRadios) {
  eachRadio.addEventListener("click", handleAllRadios);
}
//si la usuaria no rellena todos los datos que salte un error antes del envío al servidor
dataContainer.addEventListener("keyup", handleKeyData);
