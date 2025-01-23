function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
window.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-btn');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});