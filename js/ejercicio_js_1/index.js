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

var x;
var y;

x = 5+6;
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
//VALOR_GRAVEDAD_TIERRA = 6;//
console.log("VALOR_GRAVEDAD_TIERRA=" + VALOR_GRAVEDAD_TIERRA)