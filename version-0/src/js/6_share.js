/* eslint-disable indent */
/* eslint-disable strict */
// 'use strict';
// //una vez que se ha rellenado el formulario y previsualizado la tarjeta
// //si pulsa el boton crear tarjeta
// //1. se enviará al servidor los datos del formulario
// //2. ((nos devuelve el servidor un link))//
// //3. quitamos la clase hidden de la segunda seccion de share----tambien se escribe el link generado
// //4. si la usuaria pincha en el boton twiter--->se comparte su enlace en twiter
// //5. al clickar en reset o modificar campos en el formulario el boton crear tarjeta vuelve a estar activa(naranja) y desaparecerá la segunda seccion de share

const buttonShare = document.querySelector(".js-button-share");
const shareLink = document.querySelector(".js-true");
const sectionLink = document.querySelector(".js-section-link");
const publicTwitter = document.querySelector(".js-btn-twitter");
const lknPublicTwitter = document.querySelector(".js-link-twitter");
const linkTwitter = document.querySelector(".link-twitter");

function handleShareCard(event) {
  event.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      sectionLink.classList.remove("card-hidden");
      buttonShare.classList.add("button-grey");
      linkTwitter.classList.add("link-twitter");
      showURL(result);
      handleButtonTwitter(result);
    });
}
function showURL(result) {
  if (result.success) {
    shareLink.innerHTML =
      '<a class="share-newcard__link" target="blank" href=' +
      result.cardURL +
      ">" +
      result.cardURL +
      "</a>";
  } else {
    sectionLink.innerHTML =
      "¡¡Ups!!  No hemos podido generar tu tarjeta. Por favor, rellena todos los campos del formulario.";
  }
}
function handleButtonTwitter(result) {
  let html = "";
  html += `<a class="js-link-twitter link-twitter" target="blank" href="https://twitter.com/intent/tweet?text=Hey!%20Mirad%20la%20tarjeta%20que%20creado%20con%20Awesome%20Profile%20Cards&url=${result.cardURL}">`;
  html += `<i class="fa-brands fa-twitter"></i>`;
  html += `<span>Compartir en Twitter</span>`;
  html += `</a>`;
  linkTwitter.innerHTML = html;
}
buttonShare.addEventListener("click", handleShareCard);
publicTwitter.addEventListener("click", handleButtonTwitter);
