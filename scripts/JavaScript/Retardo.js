
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.has-mini-submenu');

    menuItems.forEach(item => {
        let timeout;
        
        item.addEventListener('mouseover', () => {
            clearTimeout(timeout);
            item.nextElementSibling.classList.add('show');
        });

        item.addEventListener('mouseout', () => {
            timeout = setTimeout(() => {
                item.nextElementSibling.classList.remove('show');
            }, 300); // Espera 300 ms antes de ocultar
        });

        item.nextElementSibling.addEventListener('mouseover', () => {
            clearTimeout(timeout);
            item.nextElementSibling.classList.add('show');
        });

        item.nextElementSibling.addEventListener('mouseout', () => {
            timeout = setTimeout(() => {
                item.nextElementSibling.classList.remove('show');
            }, 300); // Espera 300 ms antes de ocultar
        });
    });
});
