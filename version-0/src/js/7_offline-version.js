"use strict";

if (localStorage.getItem("dataStored") !== null) {
  getLocalStorage();
}

function setLocalStorage() {
  localStorage.setItem("dataStored", JSON.stringify(data));
}

function getLocalStorage() {
  data = JSON.parse(localStorage.getItem("dataStored"));
  paintData();
}
