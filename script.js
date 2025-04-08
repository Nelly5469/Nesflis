const pathCatalogue = './resources/peliculas_series.json';
const currentLocation = '.';
let catalogue;
let recomendations;

function authenticateLogin(){
    window.location.href = 'mainPage.html';
}

function createDetailedView(element){
    const container = document.getElementById('details-cont');
    //create
    const subCont = document.createElement("div");
    const textCont = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const duration = document.createElement("p");
    const synopsis = document.createElement("p");
    //set
    img.setAttribute("src",currentLocation+element.imagen_ruta);
    img.setAttribute("alt",element.titulo);
    title.innerText = element.titulo;
    duration.innerText = element.duration;
    synopsis.innerText = element.synopsis;
    //append
    textCont.appendChild(title);
    textCont.appendChild(duration);
    textCont.appendChild(synopsis);
    subCont.appendChild(textCont);
    subCont.appendChild(img);
    container.appendChild(subCont);
    return container;
}

function findContentById(id){
    console.log("catalogo desde findContentById ");
    console.log(catalogue);
    const content = catalogue.find(element => element.id.toString() === id);
    if(content){
        console.log("Contenido encontrado");
        return content;
    }
    else{
        console.log("Contenido no encontrado");
        return false;
    }
}

function getIdFromUrl(){
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Devuelve el valor del parámetro 'id'
}

function displayDetailedView(){
    //window.location.href = 'detailedView.html'; //NOTA: DESPUES DE ESTA LINEA LO DEMAS NO SE EJECUTA
    const idContent = getIdFromUrl();
    console.log('id: '+ idContent);
    const content = findContentById(idContent);
    console.log('Contenido encontrado:', content); // Agregado para depuración
    if(content){
        return createDetailedView(content);
    }
    else{
        const container = document.getElementById('details-cont');
        const subcont = document.createElement("p");
        subcont.innerText = "No fue posible cargar el detalle";
        container.appendChild(subcont);
        return container;
    }
    
}

function goDetailedView(id){
    window.location.href = `detailedView.html?id=${id}`;
}

function getCatalogue(){
    let contenedor = document.getElementById("recomendaciones-cont");
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
        card.setAttribute("onclick","goDetailedView("+element.id+")");
        console.log(element.imagen_ruta);
        img.setAttribute("src", currentLocation + element.imagen_ruta);
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
    console.log('Cargando catálogo...'); // Agregado para depuración
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
        console.log(catalogue);
        if(window.location.pathname === '/mainPage.html'){
            getCatalogue();
        }
        else if(window.location.pathname === '/detailedView.html'){
            console.log('se manda a /detailedView.html')
            displayDetailedView();
        }
    })
    .catch((error) => {
        console.error('Error al cargar el catálogo:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCatalogue();
});