// Código para recibir información por parte del usuario
/*const prompt = require('prompt-sync')();
var nombre = prompt("Ingresa tu nombre: ");
console.log("Hola " + nombre);
*/

// Ejercicio 1
// Cada vez que una persona ingrese una hora del día se mostará un mensaje que diga el deporte que se está realizando en la cancha.

const prompt = require('prompt-sync')();
var deporte = prompt("Ingresa el deporte: ");

switch(deporte)
{
    case "fut":
        console.log("El horario es de 1 a 3");
        break;
    case "americano":
        console.log("El horario es de 3 a 6");
        break;
    case "atletismo":
        console.log("El horario es de 6 a 9");
        break;
}