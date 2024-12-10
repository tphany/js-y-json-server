async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");

    // Esperar la conversión a JSON
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

// Realizar una consulta POST
async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST", 
        headers: { 
            "Content-type": "application/json" 
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen,
        }),
    });

    // Esperar la conversión a JSON
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida)

    return conexionConvertida
}

// Exportar las funciones
export const conexionAPI = {
    listarVideos,
    enviarVideo,
    buscarVideos,
};
