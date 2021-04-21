/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("evento ok");

  //Variables que indican al input
  let formulario = document.getElementById("formulario");
  let alert = document.getElementById("alert");
  let card = document.getElementById("Card");
  let cvc = document.getElementById("CVC");
  let monto = document.getElementById("Amount");
  let name = document.getElementById("name");
  let apellido = document.getElementById("apellido");
  let pais = document.getElementById("pais");
  let departamento = document.getElementById("departamento");
  let codePost = document.getElementById("code-post");
  let msj = document.getElementById("msj");

  // comprobacion si el campo tarjeta esta vacio
  if (validator.isEmpty(card.value)) {
    //true
    alert.classList.add("d-block");
    card.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    card.classList.remove("alert-danger");
  }
  //comprobacion si cvc esta vacio
  if (validator.isEmpty(cvc.value)) {
    //true
    alert.classList.add("d-block");
    cvc.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    cvc.classList.remove("alert-danger");
  }
  //comprobacion si monto esta vacio
  if (validator.isEmpty(monto.value)) {
    //true
    alert.classList.add("d-block");
    monto.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    monto.classList.remove("alert-danger");
  }
  //comprobacion si nombre esta vacio
  if (validator.isEmpty(name.value)) {
    //true
    alert.classList.add("d-block");
    name.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    name.classList.remove("alert-danger");
  }
  //comprobacion si apellido esta vacio
  if (validator.isEmpty(apellido.value)) {
    //true
    alert.classList.add("d-block");
    apellido.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    apellido.classList.remove("alert-danger");
  }
  //comprobacion si pais esta vacio
  if (validator.isEmpty(pais.value)) {
    //true
    alert.classList.add("d-block");
    pais.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    pais.classList.remove("alert-danger");
  }
  //comprobacion si departamento esta vacio
  if (validator.isEmpty(departamento.value)) {
    //true
    alert.classList.add("d-block");
    departamento.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    departamento.classList.remove("alert-danger");
  }
  //comprobacion si codigo postal esta vacio
  if (validator.isEmpty(codePost.value)) {
    //true
    alert.classList.add("d-block");
    codePost.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    codePost.classList.remove("alert-danger");
  }
  //comprobacion si codigo postal esta vacio
  if (validator.isEmpty(msj.value)) {
    //true
    alert.classList.add("d-block");
    msj.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    msj.classList.remove("alert-danger");
  }
});
