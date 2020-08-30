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

function validarCantidad(cantidad, error_p){
  if(/^[1-9]\d*$/.test(cantidad)){
    return true;
  }
  else{
    error_p.textContent += " Cantidad debe ser un numero entero positivo."
    return false;
  }
}

function validarPrecio(precio, error_p){
  if(/^\d+\d*\.?\d{0,2}$/.test(precio) && Number(precio) > 0){
    return true;
  }
  else{
    error_p.textContent += " Precio debe ser mayor a cero."
    return false;
  }
}

function validarIVA(iva, error_p){
  if(/^[1-9]\d*$/.test(iva)){
    return true;
  }
  else{
    error_p.textContent += " IVA debe ser un numero entero positivo."
    return false;
  }
}

function validarDesc(descuento, error_p){
  if(/^\d+$/.test(descuento) && descuento <= 100){
    return true;
  }
  else{
    error_p.textContent += " Descuento no puede ser mayor a 100."
    return false;
  }
}

let tipoCambio = document.querySelector('#tipoCambio');

//Partida 1

let calcular1 = document.querySelector('#calcular1');
let cantidad1 = document.querySelector('#cantidad1');
let codProd1 = document.querySelector('#codProd1');
let precio1 = document.querySelector('#precio1');
let iva1 = document.querySelector('#iva1');
let descuento1 = document.querySelector('#descuento1');
let error_p1 = document.querySelector('#error1');
let importe_p1 = document.querySelector('#impTotal1');
let impuesto_p1 = document.querySelector('#impuesto1');
let impDesc_p1 = document.querySelector('#impDesc1');
let total_p1 = document.querySelector('#total1');
let importeP1 = impuestoP1 = descuentoP1 = totalP1 = 0;
let validateCant1 = true;
let validatePrecio1 = true;
let validateIVA1 = true;
let validateDesc1 = true;

calcular1.addEventListener("click", () => {
  error_p1.textContent = "";
  importe_p1.textContent = "";
  impuesto_p1.textContent = "";
  impDesc_p1.textContent = "";
  total_p1.textContent = "";
  validateCant1 = validarCantidad(cantidad1.value, error_p1);
  validatePrecio1 = validarPrecio(precio1.value, error_p1);
  validateIVA1 = validarIVA(iva1.value, error_p1);
  validateDesc1 = validarDesc(descuento1.value, error_p1);
  if(validateCant1 && validatePrecio1 && validateIVA1 && validateDesc1){
    importeP1 = Number(cantidad1.value) * Number(precio1.value);
    impuestoP1 = importeP1 * (Number(iva1.value) / 100);
    descuentoP1 = importeP1 * (Number(descuento1.value) / 100);
    totalP1 = importeP1 + impuestoP1 - descuentoP1;

    importe_p1.textContent = "Importe : " + importeP1 + " " + tipoCambio.value;
    impuesto_p1.textContent = "IVA : " + impuestoP1.toFixed(2) + " " + tipoCambio.value;
    impDesc_p1.textContent = "Descuento : " + descuentoP1.toFixed(2) + " " + tipoCambio.value;
    total_p1.textContent = "TOTAL : " + totalP1.toFixed(2) + " " + tipoCambio.value;
  }
});

//Partida 2

let calcular2 = document.querySelector('#calcular2');
let cantidad2 = document.querySelector('#cantidad2');
let codProd2 = document.querySelector('#codProd2');
let precio2 = document.querySelector('#precio2');
let iva2 = document.querySelector('#iva2');
let descuento2 = document.querySelector('#descuento2');
let error_p2 = document.querySelector('#error2');
let importe_p2 = document.querySelector('#impTotal2');
let impuesto_p2 = document.querySelector('#impuesto2');
let impDesc_p2 = document.querySelector('#impDesc2');
let total_p2 = document.querySelector('#total2');
let importeP2 = impuestoP2 = descuentoP2 = totalP2 = 0;
let validateCant2 = true;
let validatePrecio2 = true;
let validateIVA2 = true;
let validateDesc2 = true;

calcular2.addEventListener("click", () => {
  error_p2.textContent = "";
  importe_p2.textContent = "";
  impuesto_p2.textContent = "";
  impDesc_p2.textContent = "";
  total_p2.textContent = "";
  validateCant2 = validarCantidad(cantidad2.value, error_p2);
  validatePrecio2 = validarPrecio(precio2.value, error_p2);
  validateIVA2 = validarIVA(iva2.value, error_p2);
  validateDesc2 = validarDesc(descuento2.value, error_p2);
  if(validateCant2 && validatePrecio2 && validateIVA2 && validateDesc2){
    importeP2 = Number(cantidad2.value) * Number(precio2.value);
    impuestoP2 = importeP2 * (Number(iva2.value) / 100);
    descuentoP2 = importeP2 * (Number(descuento2.value) / 100);
    totalP2 = importeP2 + impuestoP2 - descuentoP2;

    importe_p2.textContent = "Importe : " + importeP2 + " " + tipoCambio.value;
    impuesto_p2.textContent = "IVA : " + impuestoP2.toFixed(2) + " " + tipoCambio.value;
    impDesc_p2.textContent = "Descuento : " + descuentoP2.toFixed(2) + " " + tipoCambio.value;
    total_p2.textContent = "TOTAL : " + totalP2.toFixed(2) + " " + tipoCambio.value;
  }
});

//Partida 3

let calcular3 = document.querySelector('#calcular3');
let cantidad3 = document.querySelector('#cantidad3');
let codProd3 = document.querySelector('#codProd3');
let precio3 = document.querySelector('#precio3');
let iva3 = document.querySelector('#iva3');
let descuento3 = document.querySelector('#descuento3');
let error_p3 = document.querySelector('#error3');
let importe_p3 = document.querySelector('#impTotal3');
let impuesto_p3 = document.querySelector('#impuesto3');
let impDesc_p3 = document.querySelector('#impDesc3');
let total_p3 = document.querySelector('#total3');
let importeP3 = impuestoP3 = descuentoP3 = totalP3 = 0;
let validateCant3 = true;
let validatePrecio3 = true;
let validateIVA3 = true;
let validateDesc3 = true;

calcular3.addEventListener("click", () => {
  error_p3.textContent = "";
  importe_p3.textContent = "";
  impuesto_p3.textContent = "";
  impDesc_p3.textContent = "";
  total_p3.textContent = "";
  validateCant3 = validarCantidad(cantidad3.value, error_p3);
  validatePrecio3 = validarPrecio(precio3.value, error_p3);
  validateIVA3 = validarIVA(iva3.value, error_p3);
  validateDesc3 = validarDesc(descuento3.value, error_p3);
  if(validateCant3 && validatePrecio3 && validateIVA3 && validateDesc3){
    importeP3 = Number(cantidad3.value) * Number(precio3.value);
    impuestoP3 = importeP3 * (Number(iva3.value) / 100);
    descuentoP3 = importeP3 * (Number(descuento3.value) / 100);
    totalP3 = importeP3 + impuestoP3 - descuentoP3;

    importe_p3.textContent = "Importe : " + importeP3 + " " + tipoCambio.value;
    impuesto_p3.textContent = "IVA : " + impuestoP3.toFixed(2) + " " + tipoCambio.value;
    impDesc_p3.textContent = "Descuento : " + descuentoP3.toFixed(2) + " " + tipoCambio.value;
    total_p3.textContent = "TOTAL : " + totalP3.toFixed(2) + " " + tipoCambio.value;
  }
});

//Documento TOTAL

let facturar = document.querySelector('#facturar');
let fecha = document.querySelector('#fechaDocumento');
let clienteClave = document.querySelector('#clienteClave');
let clienteNombre = document.querySelector('#clienteNombre');
let descuentoDoc = document.querySelector('#descuento');
let errorDoc_p = document.querySelector('#errorDoc');
let importeDoc_p = document.querySelector('#impTotalDoc');
let impuestoDoc_p = document.querySelector('#impuestoDoc');
let impDescDoc_p = document.querySelector('#impDescDoc');
let descuentoDoc_p = document.querySelector('#descuentoTotal')
let totalDoc_p = document.querySelector('#totalDoc');
let validateDescDoc = true;
let validateFecha = true;
let validateClave = true;
let validateNombre = true;

facturar.addEventListener("click", () => {
  errorDoc_p.textContent = "";
  importeDoc_p.textContent = "";
  impuestoDoc_p.textContent = "";
  impDescDoc_p.textContent = "";
  totalDoc_p.textContent = "";
  validateDescDoc = validarDesc(descuentoDoc.value, errorDoc_p);
  validateFecha = validarFecha(fecha.value, errorDoc_p);
  validateClave = validarClave(clienteClave.value, errorDoc_p);
  validateNombre = validarNombre(clienteNombre.value, errorDoc_p);
    if(validateDescDoc){
    if(importeP1 === 0 && impuestoP1 === 0 && descuentoP1 === 0  && totalP1 === 0){
      errorDoc_p.textContent += " Favor de calcular la Partida 1.";
    }
    else if(importeP2 === 0 && impuestoP2 === 0 && descuentoP2 === 0  && totalP2 === 0){
      errorDoc_p.textContent += " Favor de calcular la Partida 2.";
    }
    else if(importeP3 === 0 && impuestoP3 === 0 && descuentoP3 === 0  && totalP3 === 0){
      errorDoc_p.textContent += " Favor de calcular la Partida 3.";
    }
    else{
    let importe = importeP1 + importeP2 + importeP3;
    let impuesto = impuestoP1 + impuestoP2 + impuestoP3;
    let descuento = descuentoP1 + descuentoP2 + descuentoP3;
    let descDoc = (totalP1 + totalP2 + totalP3) * (Number(descuentoDoc.value) / 100);
    let importeTotal = (totalP1 + totalP2 + totalP3);
    let total = (totalP1 + totalP2 + totalP3) - descDoc;

    importeDoc_p.textContent = "Sumatoria de importes : " + importe + " " + tipoCambio.value;
    impuestoDoc_p.textContent = "Sumatoria de impuestos : " + impuesto.toFixed(2) + " " + tipoCambio.value;
    impDescDoc_p.textContent = "Sumatoria de descuentos : " + descuento.toFixed(2) + " " + tipoCambio.value;
    descuentoDoc_p.textContent = "Descuento del documento : " + descDoc.toFixed(2) + " " + tipoCambio.value;
    totalDoc_p.textContent = "TOTAL del documento : " + total.toFixed(2) + " " + tipoCambio.value;

    alert(`Factura \n Fecha de factura : ${fecha.value}\n Nombre del cliente : ${clienteNombre.value}/n Tipo de cambio : ${tipoCambio.value}\n Partida 1:\n  Importe : ${importeP1}\n  IVA : ${impuestoP1}\n  Descuento : ${descuentoP1}\n  Total : ${totalP1}\n Partida 2:\n  Importe : ${importeP2}\n  IVA : ${impuestoP2}\n  Descuento : ${descuentoP2}\n  Total : ${totalP2}\n Partida 3:\n  Importe : ${importeP3}\n  IVA : ${impuestoP3}\n  Descuento : ${descuentoP3}\n  Total : ${totalP3}\n TOTAL\n Importe total : ${importeTotal}\n Descuento : ${descDoc}\n TOTAL : ${total}`);


    }
  }
});
