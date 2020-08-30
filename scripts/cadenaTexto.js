/*
Carlos Argel Arias Cerda AGOSTO 29 2020
*/

function validateString(string){
  if(/^[A-Z|a-z|0-9]+[\s|A-Z|a-z|0-9]*$/.test(string)){
      return true;
  }
  else{
    error_p.textContent = "ERROR : La frase NO debe contener carateres especiales y NO puede ser vacio";
    return false;
  }
}

function cifrar(string){
  string = string.replace(/[Aa]/g, '4');
  string = string.replace(/[Ee]/g, '3');
  string = string.replace(/[Ii]/g, '1');
  string = string.replace(/[Oo]/g, '0');
  string = string.replace(/ /g, '_');
  string = string.replace(/[Ss]/g, '5');
  string = string.replace(/[Zz]/g, '2');
  return string;
}

let aceptar = document.querySelector('#aceptar');
let input = document.querySelector('input');
let error_p = document.querySelector('#error');
let vocales_p = document.querySelector('#vocales');
let cifrada_p = document.querySelector('#cifrada');
let reves_p = document.querySelector('#reves');
let cant_vocales = 0;
let frase_cifrada = "";
let frase_reves = "";
validate = true;

aceptar.addEventListener("click", () => {
  let frase = input.value;
  error_p.textContent = "";
  vocales_p.textContent = "";
  cifrada_p.textContent = "";
  reves_p.textContent = "";
  validate = validateString(frase);
  if(validate){
    cant_vocales = (frase.match(/[a|e|i|o|u|A|E|I|O|U]/g) || []).length;
    vocales_p.textContent = "Cantidad de vocales : " + cant_vocales;
    frase_cifrada = cifrar(frase);
    cifrada_p.textContent = "Frase cifrada : " + frase_cifrada;
    frase_reves = frase.split('').reverse().join('');
    reves_p.textContent = "Frase al reves : " + frase_reves;
  }
});
