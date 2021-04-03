// Código para recibir información por parte del usuario
/*const prompt = require('prompt-sync')();
var nombre = prompt("Ingresa tu nombre: ");
console.log("Hola " + nombre);
*/

// Ejercicio 1
// Cada vez que una persona ingrese una hora del día se mostará un mensaje que diga el deporte que se está realizando en la cancha.

const prompt = require('prompt-sync')();
var horaDia = prompt("Ingresa la hora: ");

if(horaDia <= 3)
{
    console.log("El equipo de fút, está entrenando");
}

if(horaDia > 3 && horaDia <= 6)
{
    console.log("El equipo de americano, está entrenando");
}

if(horaDia > 6 && horaDia <= 9)
{
    console.log("El equipo de atletismo, está entrenando");
}