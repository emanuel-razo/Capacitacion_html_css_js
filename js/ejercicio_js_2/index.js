var numero1 = 40;
var numero2 = 45;
var numero3 = 23;

var texto1 = "Hola";
var texto2 = "Holaa";

console.log('numero1: ', numero1);
console.log('numero2: ', numero2);
console.log('numero3: ', numero3);

console.log('texto1: ', texto1);
console.log('texto2: ', texto2);



/*************  1- Operadores logicos  **************/

console.log("2 > 4: ", 2 > 4);
console.log("numero1 > numero2", numero1 > numero2);
console.log("numero1 < numero2", numero1 < numero2);
console.log("numero1 == numero2", numero1 == numero2);

console.log("texto1 == texto2", texto1 == texto2);

console.log("numero1 > numero2 && numero1 > numero2: ", (numero1> numero2) && (numero1 > numero3) );
                                                    /*  (40 > 45) && (40 > 23)

                                                    0          &&         1  =  0;
                                                    false      &&        true = false;
                                                    ---------------------------------
                                                        AND &&
                                                    1 * 1 = 1
                                                    1 * 0 = 0 
                                                    0 * 1 = 0
                                                    0 * 0 = 0

                                                           OR ||

                                                    1 + 1 = 1
                                                    1 + 0 = 1
                                                    0 + 1 = 1
                                                    0 + 0 = 0

                                                    */



/******Condicionales*******/


/*condicional IF*/

if (numero1 > numero2) {
    console.log("Si es mayor el numero1 que el numero2");
} else if (numero1 < numero2) {
    console.log("No es mayor el numero1 que el numero2");
} else {
    console.log("Los dos numeros son iguales");
}


var claveSecreta = "programacion";

var claveSecretaUsuario = "programacion"

console.log("Resultado con if forma 1");
if (claveSecreta == claveSecretaUsuario) {
    console.log("Felicidades,puedes acceder");
} else {
    console.log('No es correcta la clave')
}

console.log('Resultado con if forma 2 "De una sola linea"');
//IF de una sola linea es igual al if de arriba, pero con distinta sontaxis//
//(CONDICIONAL) ? SI_SE_CUMPLE_HAS_ESTO : SI_NO_SE_CUMPLE_HAS_ESTO//
(claveSecreta == claveSecretaUsuario)
 ? console.log("Flecidades, puedes acceder")
 : console.log("No es correcta la clave")


 //combinar una exprecion matematica y un operador grafico
if (numero1 > ((numero2 * numero3) -numero2)) {
    console.log ("SI (numero1 > ((numero2 * numero3) -numero2))");
} else{
    console.log("NO (numero1 > ((numero2 * numero3) -numero2)) ")
}


//condicional Switch
 console.log("usando un else if de ejmplo:");

 // var diaDeLaSemana = "pastel";
 var diaDeLaSemana = "Lunes";

 if (diaDeLaSemana == "Lunes"){
    console.log ("Que aburrido los lunes")
} else if (diaDeLaSemana == "Martes") {
    console.log ("Que cansado los martes")
} else if (diaDeLaSemana == "Miercoles") {
    console.log ("Que cansado los miercoles")
} else if (diaDeLaSemana == "Jueves") {
    console.log ("Que cansado los jueves")
} else if (diaDeLaSemana == "Viernes") {
    console.log ("Que cansado los viernes")
} else if (diaDeLaSemana == "Sabado") {
    console.log ("Que cansado los sabado")
} else if (diaDeLaSemana == "Domingo") {
    console.log ("Que cansado los domingo")
} else  {
    console.log ("Eso no es un dia de la semana")
}
    

console.log("usando un switch de este mismo ejemplo: ");

switch (diaDeLaSemana) {
    case 'Lunes':
        console.log("Que aburrido los lunes");
        break
        case 'martes':
        console.log("Que aburrido los martes");
        break
        case 'miercoles':
        console.log("Que aburrido los miercoles");
        break
        case 'jueves':
        console.log("Que aburrido los jueves");
        break
        case 'viernes':
        console.log("Que aburrido los viernes");
        break
        default :
        console.log("eso no es un dia se la semana");
}