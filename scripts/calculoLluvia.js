/*
Carlos Argel Arias Cerda AGOSTO 29 2020
*/

function validateNumbers(array){
  let validate = true;
  array.forEach((item) => {
    console.log(item);
    if(/^\d+\d*\.?\d*$/.test(item)){
      return;
    }
    else{
      error_p.textContent = "ERROR : Dia " + (array.indexOf(item) + 1) + " solo debe contener numeros. No puede ser vacio";
      validate = false;
    }
  });
  return validate;
}

let calcular = document.querySelector('#calcular');
let inputs = document.querySelectorAll('input');
let max_p = document.querySelector('#max');
let min_p = document.querySelector('#min');
let avg_p = document.querySelector('#avg');
let error_p = document.querySelector('#error');
let array = [];
let max_value = 0;
let max_index = 0;
let min_value = 0;
let promedio = 0;
let validate = true;

calcular.addEventListener("click", () => {
  error_p.textContent = "";
  max_p.textContent = "";
  min_p.textContent = "";
  avg_p.textContent = "";
  inputs.forEach((item) => {
    array.push(item.value);
  });
  validate = validateNumbers(array);
  max_value = Math.max(...array);
  max_index = array.indexOf(String(max_value)) + 1;
  min_value = Math.min(...array);
  min_index = array.indexOf(String(min_value)) + 1;
  total = array.reduce((a, b) => Number(a) + Number(b), 0);
  promedio = total / array.length;
  if(validate){
    max_p.textContent = "Dia de mayor lluvia " + max_index + " con cantidad de lluvia " + max_value;
    min_p.textContent = "Dia de menor lluvia " + min_index + " con cantidad de lluvia " + min_value;
    avg_p.textContent = "Promedio de lluvia por mes : " + promedio.toFixed(2);
  }
  array = [];
  max_value = 0;
  min_value = 0;
  promedio = 0;
  total = 0;
});
