const nombre = prompt("Ingrese su nombre");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const nombreMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1);
const editar = document.getElementById("editar");

h1.innerHTML = `¡Hola, ${nombreMayuscula}!`
p.innerHTML = `Este texto HTML y saludo fueron creados solamente manipulando el DOM con Javascript<br>
Una vez que ingresa su nombre, el proceso va a poner la primera letra en mayúscula<br>`
editar.textContent = `Este texto se añadió mediante etiquetas de HTML normales, pero este texto se creó a partir de la manipulación del DOM. ¡Espero que te guste, ${nombreMayuscula}!`

document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(editar)