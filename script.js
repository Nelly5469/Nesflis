const pathCatalogue = './resources/peliculas_series.json';
let catalogue;
let recomendations;

function authenticateLogin(){
    window.location.href = 'mainPage.html';
}

function getCatalogue(){
    let contenedor = document.getElementById("recomendaciones-cont");
    const location = '.';
    let card, img, cardBody, title;
    for(element of catalogue){
        //create sub-elements
        card = document.createElement("div");
        img = document.createElement("img");
        cardBody = document.createElement("div");
        title = document.createElement("h5");
        //set attributes
        card.setAttribute("class", "card");
        card.setAttribute("style","width: 18rem;");
        console.log(element.imagen_ruta);
        img.setAttribute("src", location + element.imagen_ruta);
        img.setAttribute("class","card-img-top");
        img.setAttribute("alt",element.titulo);
        cardBody.setAttribute("class","card-body");
        title.innerText = element.titulo;
        title.setAttribute("class","card-text");
        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        contenedor.appendChild(card);
    }
    return contenedor;
}

//leer catalogo
function loadCatalogue(){
    fetch(pathCatalogue)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then((output) => {
        console.log('Contenido del catálogo cargado:', output); // [DEB]
        catalogue = output;
        getCatalogue();
        //console.log(catalogue);
        //let element = document.getElementById('recomendaciones');
        //element.textContent = JSON.stringify(catalogue, null, 2); // Mostrar el contenido en la página
    })
    .catch((error) => {
        console.error('Error al cargar el catálogo:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCatalogue();
});