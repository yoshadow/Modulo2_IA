// Declaración de una función
function multiplica(primerOperando)
{
    var resultado = primerOperando * 2;
    console.log("Resultado es: "+resultado);
}

multiplica(2);

// Declaración de una función como expresión (variable)
var res = function multiplicaN2(primerOperando)
{
    return primerOperando * 2;
}

console.log(res(2));

// Funciones flecha
const saludaPersona = (nombre) => console.log("Hola "+nombre);

saludaPersona("Isaac");

// Ejercicio 1
/*
Escribir un progroma que tenga una función a la que se le puso como parámetro un número y devuelva
como resultado un texto que indica si el número es par o impar
*/

function determinaNumero(num)
{
    if(num % 2)
    {
        console.log("El número es impar");
    }else
    {
        console.log("El número es par");
    }
}

determinaNumero(21);

// Ejercicio 2
/*
Escribir un progroma que tenga una función que muestre la información de un texto que se introduce como
argumento y determinar si el texto contiene mayúsculas, minúsculas o ambas.
*/

function determinaTexto(texto)
{
    if(texto == texto.toUpperCase())
    {
        console.log("El texto está en mayúsculas");
    }
    
    if(texto == texto.toLowerCase())
    {
        console.log("El texto está en minúsculas");
    }
}

determinaTexto("hola");