let currentSlideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const thumbnails = document.querySelectorAll('.thumbnails img');
let autoSlideTimeout;
let autoSlideEnabled = true;
let isZoomed = false;
let imgOffsetX, imgOffsetY;

function moveSlide(direction) {
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    updateSlider();
    resetAutoSlide(); // Reinicia el auto-slide
}

function currentSlide(index) {
    currentSlideIndex = index;
    updateSlider();
    resetAutoSlide(); // Reinicia el auto-slide
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlideIndex);
    });
}

function autoSlide() {
    if (autoSlideEnabled) {
        moveSlide(1);
        autoSlideTimeout = setTimeout(autoSlide, 7000); // Cambia cada 7 segundos
    }
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    if (autoSlideEnabled) {
        autoSlideTimeout = setTimeout(autoSlide, 7000); // Reinicia el auto-slide
    }
}

document.querySelectorAll('.slide').forEach(slide => {
    const img = slide.querySelector('img');

    slide.addEventListener('click', () => {
        if (!isZoomed) {
            autoSlideEnabled = false;
            isZoomed = true;
            img.classList.add('zoomed');
            imgOffsetX = img.getBoundingClientRect().left;
            imgOffsetY = img.getBoundingClientRect().top;

            function handleMouseMove(e) {
                if (isZoomed) {
                    const imgRect = img.getBoundingClientRect();
                    const x = e.clientX - imgOffsetX;
                    const y = e.clientY - imgOffsetY;
                    const moveX = (x / imgRect.width) * 100; // Ajusta el desplazamiento según el nivel de zoom
                    const moveY = (y / imgRect.height) * 100;
                    img.style.transform = `translate(-${moveX}%, -${moveY}%) scale(2)`;
                }
            }

            function handleMouseUp() {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            isZoomed = false;
            img.classList.remove('zoomed');
            img.style.transform = ''; // Restablece la transformación
            autoSlideEnabled = true;
            resetAutoSlide();
        }
    });

    slide.addEventListener('dblclick', () => {
        if (isZoomed) {
            isZoomed = false;
            img.classList.remove('zoomed');
            img.style.transform = ''; // Restablece la transformación
            autoSlideEnabled = true;
            resetAutoSlide();
        }
    });

    slide.addEventListener('mouseleave', () => {
        if (isZoomed) {
            isZoomed = false;
            img.classList.remove('zoomed');
            img.style.transform = ''; // Restablece la transformación
            autoSlideEnabled = true;
            resetAutoSlide();
        }
    });
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentSlide(index);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});
