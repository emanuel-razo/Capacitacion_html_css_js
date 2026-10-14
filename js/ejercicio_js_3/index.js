// Colores en variables separados //
var color1 = "Rojo";
var color2 = "Azul";
var color3 = "Negro";
var color4 = "Morado";

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);

//** Arreglos (Arrays) 0 listas */

var arregloColoresVacio = [];
/*
var nombreArray = [
valor1,
valor2,
valor3, es decir separados por comas (puede ser numero, texto, boleano, etc )
]; */

var arregloColore1 = [
    'rojo',
    'azul',
    'negro',
    'morado',
    'amarillo',
    'gris',
    'verde',
    'rosa'
];

console.log (arregloColore1);

console.log (arregloColore1[0]);
console.log (arregloColore1[2]);

console.log (arregloColore1[7]);
console.log (arregloColore1[8]); //Es importante colocar un indice o posicion existente

/* Iteracion "For" (Iterar es recorrer de uno en uno) */

var arreglo1Numeros = [34,5,2,9,56,12,4,56,36,2,8,9,    5,  45,4,5,89,99,23,37,45,1];
                     //0,1,2,3,4,5,6,7,8,9,10,11       12   , 13,14,15,16,17,18,19,20,21

//suma un numero 4 a cada numero del array

console.log ('arreglo1Numeros[0] + 4: ' , arreglo1Numeros [0] + 4 );
console.log ('arreglo1Numeros[1] + 4: ' , arreglo1Numeros [1] + 4 );
console.log ('arreglo1Numeros[2] + 4: ' , arreglo1Numeros [2] + 4 );
console.log ('arreglo1Numeros[3] + 4: ' , arreglo1Numeros [3] + 4 );
console.log ('arreglo1Numeros[4] + 4: ' , arreglo1Numeros [4] + 4 );
console.log ('arreglo1Numeros[5] + 4: ' , arreglo1Numeros [5] + 4 );



// (posicion++) =>  (posicion = 1)

//recorrer el array
console.log("****** Ciclo For i ******");
for (let i = 0; i < arreglo1Numeros.length; i++ ) {
    let valorAccedido = arreglo1Numeros[i];

    console.log("arreglo1Numeros[] + 4: ", valorAccedido + 4 );

    //accion 3 

    //accion 4 
}

/** Recorrer un array con metodo foreach (DE INICIO A FIN SIMPRE) **/

console.log("Recorrer Array con metodo de foreach");
//let numero1 = 5;
//let arregloColores1 = [elemeto1,elemento2];
arregloColore1.forEach(function(valorAccedido, i, array){
    console.log("El color es: ", valorAccedido );
    console.log("El color MAYUSCULA es: ", valorAccedido.toUpperCase() );
});
 