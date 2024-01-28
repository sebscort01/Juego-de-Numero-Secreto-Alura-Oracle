
let numerosSecreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 10;
let intentosMax = 3;



function asignarTextoAlParrafo (elemento, texto) {

    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;

}

function verificarIntento()  {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroUsuario===numerosSecreto);

    if (numeroUsuario === numerosSecreto) {
        asignarTextoAlParrafo("p",`Descubriste el numero secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numerosSecreto) {
            asignarTextoAlParrafo("p",'El número secreto es mayor')
        } else {
            asignarTextoAlParrafo('p','El número secreto es menor')
        }
        intentos++;
        console.log(intentos);
        limpiarcaja();
    }
    return;
}

function limpiarcaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSecreto);
    // si ya soirtemaos todos los numeros

    if (listaNumeroSecreto.length == numeroMaximo) {
        asignarTextoAlParrafo('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    
        //si el numero ya esta incluido en la lista
        if (listaNumeroSecreto.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaNumeroSecreto.push(numeroGenerado);
        return numeroGenerado; 
        }
    }
}

function condicionesInicales() {
    asignarTextoAlParrafo("h1","Juego del numero secreto " );
    asignarTextoAlParrafo("p",`Indica un número del 1 a ${numeroMaximo}`);
    numerosSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    limpiarcaja();
    condicionesInicales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicales();

