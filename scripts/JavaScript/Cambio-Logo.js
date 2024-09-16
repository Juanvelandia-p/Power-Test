// Script para el cambio del logo
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

    // Ruta a las imágenes
    const logoOriginal = 'resources/logos/Logo lightened actualizado.png'; // Ajusta el nombre del archivo
    const logoHover = 'resources/logos/Logo completo darkned.png'; // Ajusta el nombre del archivo

    // Función para cambiar el logo en función del tamaño de la pantalla
    const applyLogoChange = () => {
        if (window.matchMedia('(min-width: 681px)').matches) {
            // Pantalla de escritorio: Activar el cambio de logo

            // Cambiar logo cuando el mouse está sobre la barra
            topBar.addEventListener('mouseover', handleMouseOver);
            topBar.addEventListener('mouseout', handleMouseOut);
        } else {
            // Pantalla de móvil: Desactivar el cambio de logo

            // Remover event listeners para evitar comportamiento inesperado
            topBar.removeEventListener('mouseover', handleMouseOver);
            topBar.removeEventListener('mouseout', handleMouseOut);

            // Asegurarse de que el logo esté en su estado original
            logo.src = logoOriginal;
        }
    };

    // Funciones de manejo de eventos
    const handleMouseOver = () => {
        logo.src = logoHover;
    };

    const handleMouseOut = () => {
        logo.src = logoOriginal;
    };

    // Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
    applyLogoChange();
    window.addEventListener('resize', applyLogoChange);
});
