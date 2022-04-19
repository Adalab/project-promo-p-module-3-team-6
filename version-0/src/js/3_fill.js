'use strict';

//VARIABLES

// Esta constante está en las variables de Clara
// const fill = document.querySelector('.js_fill');

// Objeto que recoge los valores que escribimos en los inputs
let data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

// Constantes de los elementos de la tarjeta

// ¿se podría hacer sólo const cardName = document.querySelector('.js_cardName').innerHTML o .href porque es la única información del elemento que vamos a necesitar, no hace falta que nos traigamos todo del elemento?
const cardName = document.querySelector('.js_cardName');
const cardJob = document.querySelector('.js_cardJob');
const cardPhone = document.querySelector('.js_cardPhone');
const cardEmail = document.querySelector('.js_cardEmail');
const cardLinkedin = document.querySelector('.js_cardLinkedin');
const cardGithub = document.querySelector('.js_cardGithub');
const cardImage = document.querySelector('.js__profile-image');
const cardImagePrev = document.querySelector('.js__profile-preview');

// Funciones con "una" acción

function renderPreview() {
  // Esto es por si preferimos escribir el usuario de github con @
  /* const githubName = data.github;
  const githubValue = githubName.slice(1); */

  if (data.name === '') {
    cardName.innerHTML = 'Nombre Apellidos';
  } else {
    cardName.innerHTML = data.name;
  }

  if (data.job === '') {
    cardJob.innerHTML = 'Front-end developer';
  } else {
    cardJob.innerHTML = data.job;
  }

  if (data.phone === '') {
    cardPhone.href = '';
  } else {
    cardPhone.href = `tel: ${data.phone}`;
  }

  if (data.email === '') {
    cardEmail.href = '';
  } else {
    cardEmail.href = `mailto: ${data.email}`;
  }

  if (data.linkedin === '') {
    cardLinkedin.href = '';
  } else {
    cardLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  }

  if (data.github === '') {
    cardGithub.href = '';
  } else {
    cardGithub.href = `https://github.com/${data.github}`;
  }
}

// Función manejadora

function handleKeyupInputs(event) {
  const inputUsed = event.target;

  if (inputUsed.id === 'name') {
    data.name = inputUsed.value;
  } else if (inputUsed.id === 'job') {
    data.job = inputUsed.value;
  } else if (inputUsed.id === 'email') {
    data.email = inputUsed.value;
  } else if (inputUsed.id === 'phone') {
    data.phone = inputUsed.value;
  } else if (inputUsed.id === 'linkedin') {
    data.linkedin = inputUsed.value;
  } else if (inputUsed.id === 'github') {
    data.github = inputUsed.value;
  }

  // localStorage.setItem('dataKawaii', JSON.stringify(data));

  renderPreview();

  /* containerDone.classList.add('collapsed'); */

  if (
    data.name !== '' &&
    data.job !== '' &&
    data.phone !== '' &&
    data.email !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.photo !== ''
  ) {
    containerDone.innerHTML = '';
    containerDone.classList.add('collapsed');
  }
}

// Evento 'keyup'

fill.addEventListener('keyup', handleKeyupInputs);
