const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const ReadLineSync = require('readline-sync');

const obtenerNumeroUsuario = () =>{
    return parseInt(ReadLineSync.question(`Ingrese un numero: `));
};

const JuegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("ADIVINA EL NUMERO SECRETO DEL 1 AL 100");
    
    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}

JuegoAdivinanza();