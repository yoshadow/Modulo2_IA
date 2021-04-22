// Programación orientada a objetos

// Creación de un objeto
var celular = {
    color: "Azul",
    peso: "80g",
    red: "5g",
    camaras: 4,
    sistema: "Android",
    bateria: 5,
    prender: function(){return "Prendiendo..."},
    reiniciar: function(){return "Reiniciando..."}
}

console.log(celular);
console.log(celular.camaras);
console.log(celular.prender());

////////////////////////////////////////////////////
console.log("");
console.log("");
console.log("");
////////////////////////////////////////////////////

var fruta1 = {nombre: "manzana"};
var fruta2 = {nombre: "manzana"};

// Aquí compara si son el mismo objeto
var resultado = ( fruta1 == fruta2);
console.log(resultado);

// Aquí compara una caracteristica especifica de cada objeto
var resultado = ( fruta1.nombre == fruta2.nombre);
console.log(resultado);

////////////////////////////////////////////////////
console.log("");
console.log("");
console.log("");
////////////////////////////////////////////////////


// Descomposición de objetos
//// Ejemplo 1
var persona = {                        // Creación de un objeto común
    nombre: "Isaac",
    apellido: "Avalos",
    edad: 30
}

var {nombre, apellido} = persona;                                   // Se descompone cada elemento en variables var
                                                                    // De esta manera podemos obtener la información de ese objeto en variables
console.log("El nombre del participante es: " + nombre + " " + apellido);

//// Ejemplo 2
var laptop = {                        // Creación de un objeto común
    SO: "linux",
    teclado: "español",
    marca: "Dell"
}

var {SO, teclado, marca} = laptop;

console.log("El sistema operativo de la computadora es: " + SO);


////////////////////////////////////////////////////
console.log("");
console.log("");
console.log("");
////////////////////////////////////////////////////

// Descomposición de objetos dentro de una función

var envio1 = {
    envio: "envio1",
    numEnvio: 337,
    producto: "Videojuego"
}

var envio2 = {
    envio: "envio2",
    numEnvio: 529,
    producto: "Impresora 3D"
}

function datoEnvio( { envio, numEnvio, producto } ){
    console.log("Nombre: " + envio);
    console.log("Numero de envío: " + numEnvio);
    console.log("Producto a enviar: " + producto);
}

datoEnvio(envio1);
datoEnvio(envio2);