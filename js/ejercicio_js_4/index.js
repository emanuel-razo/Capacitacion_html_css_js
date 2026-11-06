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


function onCambiarImagen(){
    console.log('Si entra al metodo onCambiarImagen');//Si entra
(document.getElementById('img_prueba')).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ok371gOm4QdiMBRJpA7fZsET_oWT5AQ1d_NqIbTJBhertHJYXFW04AU&s=10"
}

function onCambiarColor() {
    console.log ("Si entra a onCambirColor()");

    var arrayColores = ['red','bleu','yellow','orange','green','black','purple'];
    console.log("Lista de arrayColores: ", arrayColores);

    var colorElegido = arrayColores[0];//necesitamos que la posicion sea aleatoria, aqui aun no es 
    console.log("El color elegido es: ", colorElegido);
//establecer una posicion aleatoria con todo lo siguiente
    var numeroAleatorioMenorQueUno = Math.random();
    console.log (numeroAleatorioMenorQueUno); //numeros aleatorios entre el cero y uno

    var numeroAleatorioPosicion = numeroAleatorioMenorQueUno * (arrayColores.length - 1);
    console.log ("NumeroAleatorioPosiscion: ", numeroAleatorioPosicion);

    var numeroAleatorioSinDecimales = Math.floor(numeroAleatorioPosicion);// por fin ya tenemos la posiscion aleatoria 
    console.log ("numeroAleatorioSinDecimal: ", numeroAleatorioSinDecimales);

    var posicion = numeroAleatorioSinDecimales;
    console.log("Posicion: ", posicion);

    var colorElegidoAleatorio = arrayColores[posicion];
    console.log("ColorElegidoAleatorio: ", colorElegidoAleatorio);

   
}