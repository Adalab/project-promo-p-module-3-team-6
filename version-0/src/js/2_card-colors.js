"use strict";
//añadir los colores a la tarjeta de preview
const radio1 = document.querySelector(".js_radio1");
const radio2 = document.querySelector(".js_radio2");
const radio3 = document.querySelector(".js_radio3");
const preview = document.querySelector(".js_preview");

function handleClickRadio1() {
  preview.classList.remove("palette2");
  preview.classList.remove("palette3");
  preview.classList.add("palette1");
  data.palette = radio1.value;
}

function handleClickRadio2() {
  preview.classList.remove("palette1");
  preview.classList.remove("palette3");
  preview.classList.add("palette2");
  data.palette = radio2.value;
}

function handleClickRadio3() {
  preview.classList.remove("palette1");
  preview.classList.remove("palette2");
  preview.classList.add("palette3");
  data.palette = radio3.value;
}

radio1.addEventListener("click", handleClickRadio1);
radio2.addEventListener("click", handleClickRadio2);
radio3.addEventListener("click", handleClickRadio3);

// function handleAllRadios (event){
//   event.preventDefault();

// }

// const allRadios = document.querySelectorAll('.js_radio');
// for (const eachRadio of allRadios){
//   eachRadio.addEventListener('click', handleAllRadios);
//   console.log(allRadios);
// }

/*
const paletteValue = `palette${event.currentTarget.value}`;

    preview.classList.remove('palette1');
    preview.classList.remove('palette2');
    preview.classList.remove('palette3');

    preview.classList.add(paletteValue);
*/
