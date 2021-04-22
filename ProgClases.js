// Programación para crear clases
// Las clases nos ayudan a crear objetos de forma sencilla
// Yo lo utilizaría para cuando quisiera tener alguna base de datos
// en donde necesite agregar varios objetos con mismas categorías.

class galleta{
    constructor(tamaño, forma, sabor){
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
        this.hornea = function(){return "horneando..."}
    }
}

var galletaChocolate = new galleta("5 cm","Cuadrado","Chocolate");
var galletaChispas = new galleta("6 cm","Círculo","Chispas");

console.log(galletaChocolate);
console.log(galletaChispas);

console.log(galletaChispas.forma);
console.log(galletaChocolate.tamaño);

console.log(galletaChocolate.hornea());

