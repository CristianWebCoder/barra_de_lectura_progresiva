var $barraProgreso = document.querySelector('.bar_progress');

// Funcion para actualizar la barra de progreso

function actualizarBarraProgreso() {
    // Altura del nevegador
    const $alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    // Cuánto se ha desplazado el usuario
    const $posicionScroll = window.scrollY;

    // Porcentaje de desplazamiento
    const $porcentajeScroll = ($posicionScroll / $alturaTotal) * 100;

    // Actualizar el ancho de la barra de progreso
    $barraProgreso.style.width = `${ $porcentajeScroll }%`;
}

// Agregamos un evento scroll con nuestra funcion para actualizar la barra
window.addEventListener('scroll', actualizarBarraProgreso);