// Ejercicio 3
/*
Crea un programa en donde tengas que adivinar las letras de una palabra de 4 letras, tendrás solo 4 oportunidades de fallo para adivinarla,
en un inicio la palabra estará oculta, pero cada vez que aciertes, se mostrará la letra, si adivinas la palabra
antes de que se te acaben los intentos  ganas, sino pierdes.
*/

const prompt = require('prompt-sync')();
var palabraOculta = [];
var palabraMostrada = ["*","*","*","*"];
var aciertos = 0;
var fallas = 0;
var bandera = true;

for(var i = 0; i < 4; i++)
{
    var j = i + 1;
    palabraOculta[i] = prompt("Dame la letra número "+j+": ");
}
// onsole.log(palabraOculta);

for(i = 0; i < (palabraOculta.length * 2); i++)
{
    var intento = prompt("Ingresa una letra: ");
    for(j = 0; j < palabraOculta.length; j++)
    {
        if(intento == palabraOculta[j])
        {
            palabraMostrada[j] = palabraOculta[j];
            bandera = false;
            aciertos ++;
        }
    }

    if(bandera)
    {
        fallas++;
        bandera = false;
        console.log("Te equivocaste :(");
    }else
    {
        bandera = true;
    }

    if(fallas == 4 || aciertos == 4)
    {
        i = palabraOculta.length * 2;
    }
    console.log("Aciertos: "+aciertos);
    console.log("Fallas: "+fallas);
    console.log(palabraMostrada);
}

if(fallas == 4)
{
    console.log("Lo siento agotaste todos tus intentos");
}

if(aciertos == 4)
{
    console.log("Felicidades!! encontraste la palabra!!");
}