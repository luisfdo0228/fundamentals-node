function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log('Hola, soy '+nombre);
        myCallback(nombre);
    }, 1000);
}

function adios(nombre, otherCallback) {
    setTimeout(() => {
        console.log('Adios, '+nombre);
        otherCallback();
    }, 3000);
}

console.log('Iniciando proceso...');

hola('Luis', function (name){
    adios(name, function (){
        console.log('Terminando proceso adios...');
    });
});





