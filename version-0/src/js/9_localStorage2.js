'use strict';

// VARIABLES
const name = document.querySelector('.js_name');
const job = document.querySelector('.js_job');
const photo = document.querySelector('.js_photo');
const email = document.querySelector('.js_email');
const phone = document.querySelector('.js_phone');
const linkedin = document.querySelector('.js_linkedin');
const github = document.querySelector('.js_github');

const getInfo = JSON.parse(localStorage.getItem('updatedData'));

// Función para guardar los datos (data) actualizado cada vez que realizamos un cambio (que puede ser clic fuera del input p. ej.)
function handleChangeFormFields(event) {
  event.preventDefault();

  localStorage.setItem('updatedData', JSON.stringify(data));
}

form.addEventListener('change', handleChangeFormFields);


function localStoragePalettes() {
  if (data.palette === parseInt(radioButton1.value)) {

    radioButton1.checked = true;
    radioButton2.checked = false;
    radioButton3.checked = false;

    previewContainerCard.classList.remove('palette-2');
    previewContainerCard.classList.remove('palette-3');
    previewContainerCard.classList.add('palette-1');

  } else if (data.palette === parseInt(radioButton2.value)) {

    radioButton2.checked = true;
    radioButton1.checked = false;
    radioButton3.checked = false;

    previewContainerCard.classList.remove('palette-1');
    previewContainerCard.classList.remove('palette-3');
    previewContainerCard.classList.add('palette-2');

  } else if (data.palette === parseInt(radioButton3.value)) {

    radioButton3.checked = true;
    radioButton2.checked = false;
    radioButton1.checked = false;

    previewContainerCard.classList.remove('palette-1');
    previewContainerCard.classList.remove('palette-2');
    previewContainerCard.classList.add('palette-3');

  }
}

// Función para que el contenido del LS se quede en los inputs
function getFromLocalStorage() {

    name.value = data.name;
    job.value = data.job;
    email.value = data.email;
    phone.value = data.phone;
    linkedin.value = data.linkedin;
    github.value = data.github;

    if (data.photo !== '') {
      profileImage.style.backgroundImage = `url(${data.photo})`;
      profilePreview.style.backgroundImage = `url(${data.photo})`;
    }

    renderPreview();
    localStoragePalettes();


}


if(getInfo !== null) {

  data = getInfo;
  getFromLocalStorage();

}


