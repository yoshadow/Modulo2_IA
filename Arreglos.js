var arregloNumero = [1,2,3,4,5];
console.log(arregloNumero);

var arregloNombre = ["Isaac","Avalos","Zuñiga"];
console.log(arregloNombre);

var arregloMixto = [1,2,"Isaac","Marigel", ,true,false];
console.log(arregloMixto);

// Visualizar solo un valor de un arreglo
console.log(arregloNombre[2]);

// Agregar un valor a un arreglo
arregloNumero[0] = 3;
console.log(arregloNumero);

// Concatenar arreglos
var concaN1 = ["Hola","buenas","tardes"];
var concaN2 = ["Adios","buenas","noches"];

console.log(concaN2.concat(concaN1));

// Ordenar arreglos
var frutasN1 = ["Mandarina","Fresa","Sandía","Durazno"];
var frutasN2 = ["Mandarina","Fresa","Platano","Durazno"];
var arregloNumero = [5000,10,200,1000,400];

frutasN1.sort();
console.log(frutasN1);

arregloNumero.sort();
console.log(arregloNumero);