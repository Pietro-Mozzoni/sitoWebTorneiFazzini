function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-btn');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    button.classList.toggle('active');
}

function toggleSubMenu(event) {
    event.preventDefault(); // Evita che il link venga attivato
    const parent = event.target.parentElement;
    parent.classList.toggle('open');
}

window.addEventListener('click', function (event) {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-btn');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
        button.classList.remove('active');
    }
});
