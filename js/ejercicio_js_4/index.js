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



// cambie el html de un elemento de <p> ol el QUE SEA
console.log(document);
console.log(document.getElementById('parrafo_1_js_asasdsdd')); // si no existe el elmento es null
console.log(document.getElementById('parrafo_1_js'));

//(3*1)-4
//(document.getElementById('parrafo_1_js')).innerHTML = "Este es el nuevo texto"
(document.getElementById('parrafo_1_js')).innerHTML = '<span style="font-weight: bold;">Este es el nuevo texto de este parrafo despus de pulsar el boton</span>'
