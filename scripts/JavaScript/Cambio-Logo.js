document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const topBar = document.querySelector('.top-bar');
    const logo = document.getElementById('logo-lightened');

    // Verifica si los elementos se han cargado correctamente
    if (!topBar) {
        console.error('No se encontró el elemento .top-bar');
    }
    if (!logo) {
        console.error('No se encontró el elemento #logo-lightened');
    }

    // Rutas relativas a las imágenes
    const logoOriginal = '/resources/logos/Logo lightened actualizado.png';
    const logoHover = '/resources/logos/Logo completo darkned.png';


    // Cambiar logo cuando el mouse está sobre la barra
    topBar.addEventListener('mouseover', () => {
        console.log('Mouse sobre la barra'); // Mensaje para verificar
        logo.src = logoHover;
    });

    // Cambiar logo de vuelta cuando el mouse sale de la barra
    topBar.addEventListener('mouseout', () => {
        console.log('Mouse fuera de la barra'); // Mensaje para verificar
        logo.src = logoOriginal;
    });
});
