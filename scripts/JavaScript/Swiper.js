// Inicializar Swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permite que el slider sea infinito
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Permite hacer clic en los puntos de paginación
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, // Tiempo en milisegundos entre cada slide
        },
        on: {
            slideChangeTransitionStart: function() {
                // Ocultar el texto del slide anterior
                document.querySelectorAll('.slide-text').forEach(text => {
                    text.classList.remove('slide-in');
                    text.classList.add('slide-out');
                });
            },
            slideChangeTransitionEnd: function() {
                // Mostrar el texto del nuevo slide
                const activeSlide = document.querySelector('.swiper-slide-active');
                const slideText = activeSlide.querySelector('.slide-text');
                slideText.classList.remove('slide-out');
                slideText.classList.add('slide-in');
            }
        }
    });
});