// =======================
// 6 ALERTAS
// =======================
function alerta1() {
    alert("Hola, este es el mensaje 1");
}

function alerta2() {
    alert("Este es el mensaje 2");
}

function alerta3() {
    alert("Mensaje 3 activado");
}

function alerta4() {
    alert("Estás aprendiendo JavaScript");
}

function alerta5() {
    alert("Sigue practicando");
}

function alerta6() {
    alert("Último mensaje");
}


// =======================
// 4 CAMBIOS VISUALES (DOM)
// =======================
function cambiarFondo() {
    document.body.style.backgroundColor = "lightblue";
}

function cambiarColorTexto() {
    document.body.style.color = "red";
}

function cambiarTamano() {
    document.getElementById("logosenati").style.width = "300px";
}

function modoOscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}


// =======================
// 2 CAMBIO DE TEXTO
// =======================
function cambiarTitulo() {
    document.getElementById("cambiarTitulo").innerText = "Título cambiado con JS";
}

function cambiarParrafo() {
    document.getElementById("parrafo").innerText = "El contenido ha sido modificado usando DOM";
}