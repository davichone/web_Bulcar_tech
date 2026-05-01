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

/* =============================================
              LÓGICA DEL PRELOADER
============================================= */
// Usamos 'load' en la ventana completa, no solo en el DOM, 
// para asegurar que las fotos pesadas de la fábrica o agregados ya estén descargadas.
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Le añadimos la clase 'oculto' que creamos en el CSS
    preloader.classList.add('oculto');
    
    // Opcional: Para mantener el HTML limpio, eliminamos el preloader del código 
    // después de que termine la transición de opacidad (500 milisegundos).
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});


// SOLO PARA PRUEBAS: Obliga a que tarde 2 segundos en desaparecer
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('oculto');
    }, 8000); // 2000 ms = 2 segundos
});


/* =============================================
       CARRUSEL AUTOMÁTICO DE SERVICIOS
============================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Buscamos todos los bloques que tengan carruseles
    const carruseles = document.querySelectorAll('.carrusel-servicios');

    carruseles.forEach(carrusel => {
        // Encontramos todas las imágenes dentro de este carrusel
        const slides = carrusel.querySelectorAll('.img-slide');
        let slideActual = 0;

        // Iniciar rotación si hay más de una foto
        if (slides.length > 1) {
            setInterval(() => {
                slides[slideActual].classList.remove('activa');
                slideActual = (slideActual + 1) % slides.length;
                slides[slideActual].classList.add('activa');
            }, 1000); // Rota cada 4 segundos
        }
    });
});