'use strict';
// Función para colapsar las secciones (section)
function unfoldForm(legendId) {
  if (legendId === 'designLegend') {
    design.classList.toggle('collapsed');
    fill.classList.add('collapsed');
    share.classList.add('collapsed');
  }

  if (legendId === 'fillLegend') {
    design.classList.add('collapsed');
    fill.classList.toggle('collapsed');
    share.classList.add('collapsed');
  }

  if (legendId === 'shareLegend') {
    design.classList.add('collapsed');
    fill.classList.add('collapsed');
    share.classList.toggle('collapsed');
  }
}

// Función para rotar las flechas
function rotateArrow(arrow) {
  if (arrow === 'designLegend') {
    arrowDesign.classList.toggle('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.add('rotate');
  }

  if (arrow === 'fillLegend') {
    arrowDesign.classList.add('rotate');
    arrowFill.classList.toggle('rotate');
    arrowShare.classList.add('rotate');
  }

  if (arrow === 'shareLegend') {
    arrowDesign.classList.add('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.toggle('rotate');
  }
}

// Función manejadora
function handleCollapsed(event) {
  event.preventDefault();
  const legendId = event.currentTarget.id;
  unfoldForm(legendId);
  rotateArrow(legendId);
}

// Eventos
designLegend.addEventListener('click', handleCollapsed);
fillLegend.addEventListener('click', handleCollapsed);
shareLegend.addEventListener('click', handleCollapsed);
