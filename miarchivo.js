const nombre = prompt("Ingrese su nombre");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const nombreMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1);


h1.innerHTML = `¡Hola, ${nombreMayuscula}!`
p.innerHTML = `Este texto HTML y saludo fueron creados solamente manipulando el DOM con Javascript<br>
Una vez que ingresa su nombre, el proceso va a poner la primera letra en mayúscula<br>`

document.body.appendChild(h1);
document.body.appendChild(p);