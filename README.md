# Title: Nesflis
## Description
Streaming platform made with html, vanilla js and css
## Screenshots
![Login](./readme_sources/login.jpg)
User login
![Main Page](./readme_sources/mainPage.jpg)
Main Page
![Catalogue](./readme_sources/catalogue.jpg)
Catalogue of movies and series
## Mockup
![Mockup](./readme_sources/mockup.jpg)
## Instrucciones
1. Una vez ya descargado el repositorio, abrir la carpeta desde algun IDE como VScode.
2. Instalar una extension para lanzar cualquier tipo de desarrollo local como Live Server, en caso de no tenerla instalada
3. Dirigirse al archivo que esta en la raiz llamado index.html y una vez dentro, correr el servidor en vivo, con live server aparece un icono en la esquina inferior derecha de VScode con la leyenda "Go Live", hacer clic, esto le abrira una pestaña de su navegador con el login del sistema.
## Descripcion
1. Una vez elaborado el mockup, investigué componentes que me puedan servir en bootstrap.
2. Inicialmente cree tres archivos dentro de la carpeta index.html, style.css y script.js
3. Conecté los demás archivos al index.html y comencé a armar la estructura del login.
4. Creé mainPage.html y realicé lo mismo que con index.html.
5. Descargué imágenes representativas del contenido y creé un json para almacenar los detalles de cada pelicula y serie.
6. En script.js, realicé la lectura del json y presenté algunos detalles en mainPage.html.
## Problemas conocidos
* No es necesario escribir el correo y contraseña para iniciar sesión.
* No funcionan los elementos de la barra de navegación.
* La lista de "Más recomendaciones" "amontona los contenidos".
* Al hacer clic a algún título en "Más recomendaciones" debería de llevar a una vista detallada del título pero aún no lo hace.
## Retrospectiva
| Que salio bien? | Que puedo hacer diferente? | Que no salio bien ? |
------------------|----------------------------|-----------------------
| La incorporacion de elementos externos y automatizacion de creacion de elementos html desde js | Una mejor modularizacion del codigo js para evitar repetir lineas y pueda mantener mejor el codigo | El diseño final, el ajuste de tamaños de las imagenes, links y botones que aun no funcionan correctamente |