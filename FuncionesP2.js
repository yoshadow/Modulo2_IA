//Ejercicio 1
/*
Escribir un programa que obtenga el precio de un prodcuto y calcule el precio total, ya que también se va a cobrar
el costo de envío únicamente si el precio del producto es mayor o igual que a $399.
*/

var precioProducto = 500;

function precioTotal(costo)
{
    if(costo <= 399)
    {
        return (costo + 100);
    }else
    {
        return costo;
    }
}

var resultado = precioTotal(precioProducto);
console.log("El precio total es de "+resultado);

console.log("");
console.log("");
console.log("");