/* Creado por Luis Felipe Aguilar Olguin */


/* Trayendo los elementos de HTML a JS*/

var espacioDeTexo = document.getElementById("espacio-texto");
var boton = document.getElementById('botonCopiar');

const inText = document.getElementById('textarea');
const textarea1 = document.getElementById('espacio-texto');

/*///////////////////////////////////////////////////*/



/* Funciones de encriptado y desencriptado */
function encriptar(texto) {
    var textoOriginal = texto;

    var textoEncriptado = textoOriginal.replace(/e/gm, "enter");
    textoEncriptado = textoEncriptado.replace(/o/gm, "ober");
    textoEncriptado = textoEncriptado.replace(/i/gm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gm, "ai");
    textoEncriptado = textoEncriptado.replace(/u/gm, "ufat");

    espacioDeTexo.value = textoEncriptado;
}
function desencriptar(texto) {
    var textoOriginal = texto;

    var textoEncriptado = textoOriginal.replace(/enter/gm, "e");
    textoEncriptado = textoEncriptado.replace(/ober/gm, "o");
    textoEncriptado = textoEncriptado.replace(/imes/gm, "i");
    textoEncriptado = textoEncriptado.replace(/ai/gm, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/gm, "u");

    espacioDeTexo.value = textoEncriptado;
}
/* /////////////////////////////////////////////////// */

/* Funciones capturando el click en botones */

/*Agregamos el boton para copiar el texto desencriptado*/
function agregarBoton() {

    var textoArea = document.getElementById('botonCopiar');
    var boton = document.createElement('button');
    boton.innerHTML = 'Copiar';
    boton.id = "boton-copiar";
    boton.className = "botton"
    textoArea.parentNode.insertBefore(boton, textoArea.nextSibling);
    boton.onclick = copiar;
}
function clickEncriptar() {
    var textarea = document.getElementById("textarea");
    var texto = textarea.value.toLowerCase();
    if(texto == ""){
        alert("no se ingresó ningun texto");
    }
    else{
        encriptar(texto);
        if(isMobileDevice()){
            autoResize();
        }
        cambiarOpacidad();
        var h3 = document.getElementById("mensaje-sin-texto");
        h3.remove();/*borramos el texto flotante */
        agregarBoton();
    }
}

function clickdesencriptar(){
    var textarea = document.getElementById("textarea");
    var texto = textarea.value;
    if(texto == ""){
        alert("no se ingresó ningun texto");
    }
    else{
        desencriptar(texto);
        if(isMobileDevice()){
            autoResize();
        }
        cambiarOpacidad();
        var h3 = document.getElementById("mensaje-sin-texto");
        h3.remove();/*eliminamos texto flotante */
        agregarBoton();
    }
}


/*funcion para guardar texto en portapapeles */
function copiar() {
    espacioDeTexo.select();
    espacioDeTexo.setSelectionRange(0, espacioDeTexo.value.length); // Para dispositivos móviles
    
    // Copiar el texto al portapapeles
    document.execCommand('copy');
}
/*/////////////////////////////////////////////////////////////*/


/* Funciones extras para autoresize o cambiar estilos desde JS */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
  
function autoResize(){
    textarea1.style.height = "auto";
    textarea1.style.height = textarea1.scrollHeight + "px";
}
function autoResizeTextarea() {
  inText.style.height = 'auto';
  inText.style.height = inText.scrollHeight + 'px';
} 

function cambiarOpacidad() {
    var imagen = document.getElementById("Muñeco");
    imagen.style.opacity = "30%";
}
/*/////////////////////////////////////////////////*/


/*Aplicamos el autoresize*/
if (isMobileDevice()) {

  inText.addEventListener('input', function() {
    autoResizeTextarea();
  });
}
