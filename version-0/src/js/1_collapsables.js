'use strict';
//añadir los colapsables a las secciones
//abrir el colapsable que tenga el evento click
//cerrar todos los colapsables que no estén abiertos

/*CONSTANTS GLOBALES*/

const jsDesign = document.querySelector('.js-design');
const jsStuffed = document.querySelector('.js-stuffed');
const jsShare = document.querySelector('.js-share');
const jsArrow1 = document.querySelector('.js-arrow1');
const jsArrow2 = document.querySelector('.js-arrow2');
const jsArrow3 = document.querySelector('.js-arrow3');
const jsDesignContainer = document.querySelector('.js-design-container');
const jsStuffedContainer = document.querySelector('.js-stuffed-container');
const jsShareContainer = document.querySelector('.js-share-container');

/*FUNCIONES EVENTOS Y CONDICIONALES*/

jsDesignContainer.addEventListener('click',()=>{
  jsArrow1.classList.toggle('collapsible');
  if (jsDesign.classList.contains('hidden')) {
    jsDesign.classList.remove('hidden');
  } else {
    jsDesign.classList.add('hidden');
  }
});

jsStuffedContainer.addEventListener('click',()=>{
  jsArrow2.classList.toggle('collapsible');
  jsStuffed.classList.toggle('hidden');
});

jsShareContainer.addEventListener('click', ()=>{
  jsArrow3.classList.toggle('share-legend__arrow');
  jsShare.classList.toggle('hidden');
});

