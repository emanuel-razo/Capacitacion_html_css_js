function onClickButtonPrueba() { //funcion para cuando se da clic al boton
    alert("! Le diste clic al boton ¡");
    console.log("! Le diste clic al boton ¡");
}

// let continuarFlujo = false;
let continuarFlujo = confirm("Di si quieres continuar con el flujo");

if (continuarFlujo){
    console.log("EL usuario si desa continuar");
}  else {
    console.log("El usuario no desea continuar");
}
