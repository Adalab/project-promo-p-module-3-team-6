/* eslint-disable no-undef */
'use strict';
//se van a eliminar todos los campos y la imagen de la tarjeta
const resetBtn = document.querySelector('.js-reset');

const resetName= document.querySelector('.js_reset-name');
const resetJob= document.querySelector('.js_reset-job');
const resetMail= document.querySelector('.js_reset-mail');
const resetPhone= document.querySelector('.js_reset-phone');
const resetLinkedin= document.querySelector('.js_reset-linkedin');
const resetGit= document.querySelector('.js_reset-git');
const resetTitle = document.querySelector('.js_reset-title');
const resetSubtitle = document.querySelector('.js_reset-subtitle');
const resetTelf = document.querySelector('.js_reset-telf');
const resetSend = document.querySelector('.js_reset-send');
const resetLknd = document.querySelector('.js_reset-lknd');
const resetGitHub = document.querySelector('.js_reset-github');

function resetCard() {
  preview.classList.remove('palette1');
  preview.classList.remove('palette2');
  preview.classList.remove('palette3');
  resetTitle.textContent = 'Nombre Apellido';
  resetSubtitle.textContent = 'Front-end developer';
  profilePreview.style.backgroundImage='';
  profileImage.style.backgroundImage='';
  resetTelf.href = '';
  resetSend.href = '';
  resetLknd.href = '';
  resetGitHub.href = '';
}

function resetForm (){
  radio1.checked = '';
  resetName.value='';
  resetJob.value='';
  fileField.value= '';
  resetMail.value='';
  resetPhone.value='';
  resetLinkedin.value='';
  resetGit.value='';
  sectionLink.classList.add('hidden');
  buttonShare.classList.remove('button-grey');
}

function handleResetForm (event){
  event.preventDefault();
  resetForm ();
  resetCard ();
}

resetBtn.addEventListener('click', handleResetForm);