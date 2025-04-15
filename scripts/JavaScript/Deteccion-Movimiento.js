document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0; // Última posición de desplazamiento
  const topBar = document.querySelector('.top-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Desplazando hacia abajo: Oculta la barra
      topBar.classList.add('hidden');
    } else {
      // Desplazando hacia arriba: Muestra la barra
      topBar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
  });
});