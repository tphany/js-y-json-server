import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value.trim();
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    // Limpia la lista actual antes de mostrar los resultados
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Agrega los nuevos elementos filtrados
    busqueda.forEach(video => {
        lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen));
    });
    if (busqueda.length==0){
        lista.innerHTML=`<h2 class ="Mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`;
    }
}


const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarVideo(evento))