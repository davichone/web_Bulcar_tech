let indiceSlider = 0;
let autoPlayInterval; // Variable para guardar el temporizador

// 1. Función principal para mover el slider
function moverSlider(direccion) {
    const pista = document.getElementById('pista-slider');
    const slides = document.querySelectorAll('.slide-fw');
    const totalSlides = slides.length;

    indiceSlider += direccion;

    // Lógica para que sea infinito
    if (indiceSlider >= totalSlides) {
        indiceSlider = 0;
    } else if (indiceSlider < 0) {
        indiceSlider = totalSlides - 1;
    }

    // Desplazamiento en unidades vw (viewport width)
    const desplazamiento = -indiceSlider * 100;
    pista.style.transform = `translateX(${desplazamiento}vw)`;
}

// 2. Función para INICIAR el movimiento automático (Cada 5 segundos)
function iniciarAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moverSlider(1);
    }, 2000); // 5000 milisegundos = 5 segundos
}

// 3. Función para DETENER el movimiento automático
function detenerAutoPlay() {
    clearInterval(autoPlayInterval);
}

// --- CONFIGURACIÓN DE LOS EVENTOS (Cuando carga la página) ---
window.onload = function() {
    const contenedorSlider = document.querySelector('.slider-fw-container');

    // Iniciar el carrusel apenas cargue la web
    iniciarAutoPlay();

    // Si el mouse entra al slider, se detiene
    contenedorSlider.addEventListener('mouseenter', () => {
        detenerAutoPlay();
        console.log("Auto-play pausado");
    });

    // Si el mouse sale del slider, vuelve a correr
    contenedorSlider.addEventListener('mouseleave', () => {
        iniciarAutoPlay();
        console.log("Auto-play reanudado");
    });
};