console.log("Inicio");

function dos() {
    setTimeout(function() {
        console.log("dos");
    }, 4000);
}

function uno(){
    setTimeout(function() {
        console.log("uno");
    }, 1000);
    dos();
    console.log("tres");
}

uno();

console.log("FIN");