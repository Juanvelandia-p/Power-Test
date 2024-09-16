document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const topBar = document.querySelector('.top-bar');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Desplazando hacia abajo
      topBar.classList.add('hidden');
    } else {
      // Desplazando hacia arriba
      topBar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
  });
});
