// Script del menú
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.add('show-menu');
    });

    document.querySelector('.close-menu').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.remove('show-menu');
    });

    document.querySelectorAll('.dropdown > a').forEach(function(element) {
        element.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                window.location.href = event.target.href;
            }
        });
    });
});
document.querySelectorAll('.expand-submenu').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic se propague al enlace padre
        this.parentElement.classList.toggle('show');
        let submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

