const lista = document.querySelector(".posts");
const seleccion = prompt("Elija un número entre 1 y 100");

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for(let i = 0; i < seleccion; i++){
                const li = document.createElement("li")
                li.innerHTML = `
                <h1>${data[i].title}</h1>
                <p>${data[i].body}</p>
                `
                lista.appendChild(li);
            }
        }) 


