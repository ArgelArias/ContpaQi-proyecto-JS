/*
Carlos Argel Arias Cerda AGOSTO 30 2020
*/

//Funciones para validar los campos de entrada
function validarFecha(fecha, error_p){
  if(fecha.length > 0){
    return true;
  }
  else{
    error_p.textContent += " Fecha no puede ser vacio";
    return false;
  }
}

function validarClave(clave, error_p){
  if(clave.length > 0){
    return true;
  }
  else{
    error_p.textContent += " Clave de cliente no puede ser vacio";
    return false;
  }
}

function validarNombre(nombre, error_p){
  if(/^[A-Za-z]+[\s|A-Za-z]+$/.test(nombre)){
    return true;
  }
  else{
    error_p.textContent += " Favor de entrar un nombre valido";
    return false;
  }
}

function validarPago(pago, restante, error_p){
  if(/^\d+\d*\.?\d{0,2}$/.test(pago) && Number(pago) > 0 && Number(pago) <= restante){
    return true;
  }
  else if(Number(pago) > restante){
    error_p.textContent += " No puedes pagar mas de tu adeudo.";
    return false;
  }
  else{
    error_p.textContent += " Pago debe ser mayor a cero."
    return false;
  }
}

let pagar = document.querySelector('#pagar');
let fecha = document.querySelector('#fechaDocumento');
let clienteClave = document.querySelector('#clienteClave');
let clienteNombre = document.querySelector('#clienteNombre');
let tipoCambio = document.querySelector('#tipoCambio');
let pago = document.querySelector('#pago');
let error_p = document.querySelector('#error');
let restante_p = document.querySelector('#restante');
let validateFecha = true;
let validateClave = true;
let validateNombre = true;
let validatePago = true;
let restante = 1000; //valor hardcodeado por falta de base de datos

pagar.addEventListener("click", () => {
  error_p.textContent = "";
  validateFecha = validarFecha(fecha.value, error_p);
  validateClave = validarClave(clienteClave.value, error_p);
  validateNombre = validarNombre(clienteNombre.value, error_p);
  validatePago = validarPago(pago.value, restante, error_p);
  if(validateFecha && validateClave && validateNombre && validatePago){
    restante = restante - Number(pago.value);
    restante_p.textContent = `Restante a pagar : ${restante}`;
    alert(`Pago de ${pago.value} ${tipoCambio.value} generado con exito\n  Restante a pagar : ${restante}`);
  }
});
