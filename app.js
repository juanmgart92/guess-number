let secretNumber = 0;
let attemps = 0;
let randomNumbers = [];
let maxNumber = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntentoUsuario() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    
    if(userNumber === secretNumber) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el numero secreto en ${attemps} ${attemps === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(userNumber > secretNumber) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        attemps++;
        cleanBox();
    }
    return;
}

function restartGame() {
    //limpiamos caja de texto
    cleanBox();
    //condiciones iniciales
    initialConditions();
}

function cleanBox() {
    return document.querySelector('#userValue').value = '';   
}

function generarNumeroSecreto() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    
    if(randomNumbers.length === maxNumber) {
        asignarTextoElemento('p', 'No hay mas intentos disponibles, reinicia el juego para volver a jugar');
    }else{
        //si el numero generado esta en la lista
        if (randomNumbers.includes(generatedNumber)){
            return generarNumeroSecreto();
        }else{
            randomNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialConditions() {
    asignarTextoElemento('h1', 'Adivina el numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${maxNumber}`);
    secretNumber = generarNumeroSecreto();
    attemps = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

initialConditions();



function numBiggestSmaller(){
    let num = [22,1,5,20,10]
    let biggest = 0;
    let smaller = 0;
    for(let i=0; i<num.length; i++){
        if(num[i] > biggest){
            biggest = num[i];
        }
        if(num[i] < smaller){
            smaller = num[i];
        }
    }
    return `El numero mas grande es ${biggest} y el mas pequeño es ${smaller}`;
}