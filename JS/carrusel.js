const carrusel = document.getElementById('carrusel');
const imagenes = carrusel.children;
const imagenesPorVista = 5;
let indiceActual = 0;

// Clonar las primeras imágenes para crear el bucle infinito
for (let i = 0; i < imagenesPorVista; i++) {
    const clon = imagenes[i].cloneNode(true);
    carrusel.appendChild(clon);
}

function cambiarImagenes() {
    indiceActual++;

    const desplazamiento = -(indiceActual * 300); // 300px es el ancho de cada imagen
    carrusel.style.transform = `translateX(${desplazamiento}px)`;

    // Reiniciar el carrusel cuando llegue al final de las imágenes originales
    if (indiceActual >= imagenes.length - imagenesPorVista + 1) {
        setTimeout(() => {
            carrusel.style.transition = 'none'; // Sin animación para el "salto"
            carrusel.style.transform = 'translateX(0px)';
            indiceActual = 0;
            // Forzar el reflow para que el navegador aplique el cambio de inmediato
            void carrusel.offsetWidth;
            carrusel.style.transition = 'transform 0.5s ease-in-out';
        }, 500); // Espera a que termine la animación actual
    }
}

// Cambiar imágenes cada 10 segundos
setInterval(cambiarImagenes, 1000);
