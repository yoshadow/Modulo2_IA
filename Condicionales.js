var num1 = 5;
var num2 = 50;
var num3 = 30;

// Primera forma del if
if(num2 < num1)
{
    console.log("Verdadero");
}

// Segunda forma del if
if(num2 < num3)
{
    console.log("Verdadero");
}else
{
    console.log("Falso");
}

// Tercera forma del if
if(num2 < num3)
{
    console.log("Verdadero");
}else if(num1 > num3)
{
    console.log("Verdadero");
}else
{
    console.log("Falso");
}