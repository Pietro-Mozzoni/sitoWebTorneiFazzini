function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-btn');

    // Toggle menu visibility
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    // Toggle active state for the button
    button.classList.toggle('active');
}

window.addEventListener('click', function (event) {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-btn');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
        button.classList.remove('active');
    }
});
