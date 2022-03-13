let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");
let boton3 = document.getElementById("btn3");
let botonReset = document.getElementById("reset");

let header = document.getElementById("header");
let parrafo = document.getElementById("parrafo");

//Fondo

boton1.onclick = color1;
boton2.onclick = color2;
boton3.onclick = color3;

botonReset.onclick = reset;

function color1(){
    document.body.style.backgroundColor = "black";
    header.style.color = "white";
    parrafo.style.color = "white";
}

function color2(){
    document.body.style.backgroundColor = "red";
    header.style.color = "black";
    parrafo.style.color = "black";
}

function color3(){
    document.body.style.backgroundColor = "blue";
    header.style.color = "black";
    parrafo.style.color = "black";
}

function reset(){
    document.body.style.backgroundColor = "white";
    header.style.color = "black";
    parrafo.style.color = "black";
}

//Fin fondo
//Agregar texto

let divisor = document.getElementById("divisor");
let masTexto = document.getElementById("masTexto");
let textNode = document.createTextNode("Lorem ipsum dolor sit amet.")

masTexto.addEventListener("click", agregarTexto);

function agregarTexto(){
    divisor.appendChild(textNode);
}


//Fin agregar texto