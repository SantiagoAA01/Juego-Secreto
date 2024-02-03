let NumeroSecreto = GenerarNumeroSecreto();
let Intentos = 1;
let MaximosIntentos = 4;
let NumeroMaximo = 10;
let ListaNumerosSorteados = []; 
console.log (Intentos);
console.log (NumeroSecreto);

function AsignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);

  
    if (NumeroDeUsuario === NumeroSecreto) {
        AsignarTextoElemento ("p", `Has acertado en ${Intentos} ${(Intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (NumeroDeUsuario > NumeroSecreto) {
            AsignarTextoElemento ("p", "El número es menor");
        } else {
            AsignarTextoElemento ("p","El número secreto es mayor");
        }   
         CondicionesIniciales();
    
        Intentos++;
        limpiarCaja();
    } 
    return;

}


function limpiarCaja() {
    document.querySelector("#ValorUsuario").value = "";   
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
   console.log (NumeroGenerado);
   console.log (ListaNumerosSorteados);
    //si ya sorteamos todos los números
    if (ListaNumerosSorteados.length == NumeroMaximo) {
        AsignarTextoElemento ("p","ya se sortearon todos los números posibles")
    } else {
            //Si el numero generado está incluido en la lista
        if(ListaNumerosSorteados.includes(NumeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(NumeroGenerado)
            return NumeroGenerado;
        }
    }    
}

function CondicionesIniciales() {
    AsignarTextoElemento ("h1", "juego del numero secreto ");
    AsignarTextoElemento ("p", `Indica un número del 1 al ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function ReiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Texto indicar número
    //restablecer intentos
    //reelegir número
    CondicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

CondicionesIniciales();