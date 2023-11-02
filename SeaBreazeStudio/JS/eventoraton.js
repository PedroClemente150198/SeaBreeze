function hacerMasGrande() {
    // Cambia el tamaño de la imagen en el navegador
    const imagen = document.getElementById('miImagen');
    imagen.style.transition = 'transform 0.4s ease-in-out';
    imagen.style.transform = 'scale(1.5)';
    imagen.style.cursor = 'pointer';
    
    
    
    // Envía una solicitud al servidor para registrar el evento
    fetch('/ruta-al-servidor', {
        method: 'POST',
        body: JSON.stringify({ evento: 'raton_encima' }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Maneja la respuesta del servidor si es necesario
    })
    .catch(error => {
        // Maneja errores si ocurren
    });
}

function restaurarTamaño() {
    // Restaura el tamaño de la imagen cuando se quita el ratón
    const imagen = document.getElementById('miImagen');
    imagen.style.transform = 'scale(1)';
}