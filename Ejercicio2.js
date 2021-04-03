// Ejercicio2
/*
Para calcular el promedio de prácticas de un curso, se tomará la calificación de las 4 prácticas que se hicieron,
de estas 4 se va a eliminar la práctica con menor calificación y se obtendrá el promedio de las 3 prácticas restantes.
*/

var prac1 = 8;
var prac2 = 9;
var prac3 = 10;
var prac4 = 7;
var califMenor;

califMenor = prac1;
if(prac2 < califMenor)
{
    califMenor = prac2;
}

if(prac3 < califMenor)
{
    califMenor = prac3;
}

if(prac4 < califMenor)
{
    califMenor = prac4;
}

console.log(califMenor);

var resultado = prac1 + prac2 + prac3 + prac4 - califMenor;
resultado = resultado/3;
console.log(resultado);

for(var i=0; i<4; i++)
{
    
}