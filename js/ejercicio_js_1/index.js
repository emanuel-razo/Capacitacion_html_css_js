var numero1 = 88; //Variable declarada (nombre y estacio recerbado) y definida a la vez\\
var numero2 = 45;
var variableNoDefinida;//Variable solamente declarada (es decir daclarada pero sin valor aun, espacio recervado)\\ 


console.log(numero1);
console.log(numero2);
console.log(variableNoDefinida);
//console.log(variablePrueba);//
console.log(numero1);

//SUMAS//

var variableTexto = " Imprime la suma de 9 + 4: ";
//var variableTexto = " Imprime algo distinto ";


console.log("Este es mi texto de prueba");
console.log(variableTexto);
console.log(4 + 9);

console.log("A continuacion una suma de 2 variables");
console.log(numero1 + numero2);

console.log("A continuacion una resta de dos variablaes");
console.log(numero1 - numero2);

console.log("A continuacion una resta y suma de 2 variables");
console.log((numero2-numero1)+(numero2-6));

console.log("Concatenacion de variables Erroneas (numero mas texto)");
console.log(numero1+variableTexto);

console.log("Concatenacion de cadenas de texto");
var texto1 = "Hola que tal mi nombre es: ";
var texto2 = "fultanito";
console.log(texto1+texto2);

var decimal1 = 16.5;
var decimal2 = 24.6;

console.log("A continuacion una suma de dos variables de tipo decimal");
console.log(decimal1+decimal2);

var a = 7;
var b = 5;
var c = 4;

var resultadoOperacion = ((a+b) * (c))/c;
console.log (((a+b) * (c)) / c);
console.log (resultadoOperacion);
//asignar valor a variables previamente declaradas//
var x;
var y;

x = 5+6; //guarda el numero 11
y = x * 10;

console.log ("otra prueba");
console.log (y);

var dateToday = new Date();
console.log("**************");
console.log("La fecha de hoy:" + dateToday);
console.log("La hora actual en Horas es:" + dateToday.getHours().toString());
console.log("El dia actual es:" + dateToday.getDate().toString());
console.log("El mes actual es:" + dateToday.getMonth().toString());

console.log("**********************");
console.log("**********************");
console.log("**********************");
console.log("**********************");
console.log("Tipos de Variables");

console.log("1. Var y Let");
var variable1 = 3;
var variable2;
variable2 = 4;
variable1 = 5;
console.log("variable tiene un valor de:" + variable1);
console.log("variable2:" + variable2);

let variable3 = 366;
let variable4;
variable4 = 99;
variable3 = 102;
console.log("Variable3 tiene el valor de:" + variable3);
console.log("variable4:" + variable4);

console.log("2. CONST ****");
const VALOR_GRAVEDAD_TIERRA = 9.81;
//VALOR_GRAVEDAD_TIERRA = 6;// En los constantes no se puede volver a reasignar un valor
console.log("VALOR_GRAVEDAD_TIERRA=" + VALOR_GRAVEDAD_TIERRA);



console.log("**********************");
console.log("**********************");
console.log("**********************");
console.log("**********************");



console.log("***METODOS O FUNCIONES***")

var n1 = 6;
var n2 = 7;
var n3 = 56;


//SIN FUNCIONES
console.log("operciones sin usar FUNCIONES");

var rasultado_calculo1 = ((n1+n2)*n3) -2;
console.log("mi_resultado_calculo_1 = ", rasultado_calculo1);

var rasultado_calculo2 = ((n1+n2)*n3) -4;
console.log("mi_resultado_calculo_2 = ", rasultado_calculo2);

var rasultado_calculo3 = ((n1+n2)*n3) -6;
console.log("mi_resultado_calculo_3 = ", rasultado_calculo3);

var rasultado_calculo4 = ((n1+n2)*n3) -3;
console.log("mi_resultado_calculo_4 = ", rasultado_calculo4);

var rasultado_calculo5 = ((n1+n2)*n3) -1;
console.log("mi_resultado_calculo_5 = ", rasultado_calculo5);

//EJEMPLO DE UNA FUNCION
/*
 function apagarFoco() {
    //el circuito electrico desactiva la corriente y apaga el foco
 }
function impromirNombreEnDocumentoA(nombreAlumno){
    //La encargada de servicio escolares abre el pdf, o word de plantilla.
    //escribe el nombre recibido, manda imprimir, espera a que termine de imprimir

    return la encargada regrasa el documento impreso con el nombre que ella recibio;

}
*/


function FuncionDeCalcular (num1, num2, num3){
    
    //linea 1
    //linea 2
    //forma A

    /*let operacionResultaEjemplo = ((numero1+munero2)*numero3)-2;
    return operacionResultaEjemplo:
    */

    //forma B , regresar solamente el resultado
    return ((num1+num2)* num3)-2;
}
console.log("****Operaciones usando una funcion****")

var resultado_calculo1 = FuncionDeCalcular(n1,n2,n3);
console.log("al_resultado_calculo1= ", resultado_calculo1);

var resultado_calculo2 = FuncionDeCalcular(8,6,9);
console.log("al_resultado_calculo2= ", resultado_calculo2);

var resultado_calculo3 = FuncionDeCalcular(2,1,1);
console.log("al_resultado_calculo3= ", resultado_calculo3);

var resultado_calculo4 = FuncionDeCalcular(45,65,77);
console.log("al_resultado_calculo4= ", resultado_calculo4);

var resultado_calculo5 = FuncionDeCalcular(11,22,23);
console.log("al_resultado_calculo5= ", resultado_calculo5);

//Funcion para calcular area de circulo//

var area_circulo_1 = 3.1416 * ( (3) * (3) );
var area_circulo_2 = 3.1416 * ( (2) * (2) );
var area_circulo_3 = 3.1416 * ( (1) * (1) );
var area_circulo_4 = 3.1416 * ( (4) * (4) );
var area_circulo_5 = 3.1416 * ( (6) * (6) );
var area_circulo_6 = 3.1416 * ( (7) * (7) );

console.log ("**Area de circulo sin funciones**");

console.log("El area del circulo 1 de radio 3 =",area_circulo_1);
console.log("El area del circulo 2 de radio 2 =",area_circulo_2);
console.log("El area del circulo 3 de radio 1 =",area_circulo_3);
console.log("El area del circulo 4 de radio 4 =",area_circulo_4);
console.log("El area del circulo 5 de radio 6 =",area_circulo_5);
console.log("El area del circulo 6 de radio 7 =",area_circulo_6);

console.log ("**Area de circulo con funciones**");

function calcularAreaCirculo (radio) {
    
    return 3.1416 * ((radio) * (radio));
}

var area_circulo_f_1 = calcularAreaCirculo(3);
var area_circulo_f_2 = calcularAreaCirculo(2);
var area_circulo_f_3 = calcularAreaCirculo(1);
var area_circulo_f_4 = calcularAreaCirculo(4);
var area_circulo_f_5 = calcularAreaCirculo(6);
var area_circulo_f_6 = calcularAreaCirculo(7);

console.log("El area del circulo 1 de radio 3 =", area_circulo_f_1);
console.log("El area del circulo 2 de radio 2 =", area_circulo_f_2);
console.log("El area del circulo 3 de radio 1 =", area_circulo_f_3);
console.log("El area del circulo 4 de radio 4 =", area_circulo_f_4);
console.log("El area del circulo 5 de radio 6 =", area_circulo_f_5);
console.log("El area del circulo 6 de radio 7 =", area_circulo_f_6);

console.log("*****Ver si usuario esta disponible******");

function checkDisponibilidadUsername(userName) {
    let nombresYausados = ['luis15','DarthVader','Coco'];

    //var elNombreEstaDisponible = true;
    var yaExisteElNombre = nombresYausados.includes(userName);
    //var yaExisteElNombre = false;

    //var elNombreEstaDisponible = false;
var elNombreEstaDisponible = !yaExisteElNombre;

//Revisar si userName esta disponible 

//si esta disponible 'Esta disponible';
//si NO esta disponible 'No esta disponible';

if(elNombreEstaDisponible) {    //se emite el igual a true if(elNombreEstaDisponible == true)
    return userName + '  Esta disponible';
} else {
    return userName + '  No esta disponible';
}
}

var usuario1 = 'mike25';

console.log( checkDisponibilidadUsername(usuario1));
console.log( checkDisponibilidadUsername("luis15"));
console.log( checkDisponibilidadUsername("goku23"));