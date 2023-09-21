var $barraProgreso = document.querySelector('.bar_progress');

window.addEventListener('scroll', function() {
    const $posicionScroll = window.scrollY;

    const $alturaDocumento = document.documentElement.scrollHeight;

    const $alturaVentana =  window.innerHeight;

    const $alturaTotal =  $alturaDocumento - $alturaVentana;

    // Porcentaje de desplazamiento
    const $porcentajeScroll = ($posicionScroll / $alturaTotal) * 100;

    // Actualizar el ancho de la barra de progreso
    $barraProgreso.style.width = `${ $porcentajeScroll }%`;
});