// Utilerías de Javascript

console.log(Math.random());     // Número aleatorio entre 0 y 1

console.log(Math.random() * 10); // Número aleatorio entre 0 y 10

console.log(Math.round( Math.random() * 10)) // Número aleatorio entre 0 y 10 pero redondeado

/////////////////////////////////////////////
console.log("");
/////////////////////////////////////////////

var cadenaTexto = "ola ke ase ke";
console.log(cadenaTexto)

console.log("La cadena tiene " + cadenaTexto.length + " caracteres.");        // Tiene 13 caracteres
console.log("La palabra ke se encuentra en la posición " + cadenaTexto.indexOf("ke")); // Solo busca la primera vez que aparece el caracter o caracteres

console.log(cadenaTexto.replace("ke","que"));   // Remplaza caracteres el primero que encuentra

console.log("Se obtene solo la palabra ase: " + cadenaTexto.slice(7,10)); // Extrae un pedazo de cadena de otra cadena

/////////////////////////////////////////////
console.log("");
/////////////////////////////////////////////

// Convertir letras a mayúsculas o minúsculas

var cadena1 = "Al INfInItO Y Mas ALLA ";
var cadena2 = "I'm ineVITabLE"

console.log("Original: " + cadena1);
console.log("Cambiada: " + cadena1.toLowerCase());

console.log("Original: " + cadena2);
console.log("Cambiada: " + cadena2.toUpperCase());

// Concatenar
console.log(cadena1.concat(cadena2));

// Utilizar funciones en otro código/programa
//// El programa que llama esta función es LlamandoFunciones.js
exports.numAleatorio = () => {
    return resultado = Math.round(Math.random() * 10);
}

// NO FUNCIONA //
/*
exports.numAleatorio2(){
    return resultado = Math.round(Math.random() * 100);
}
*/

