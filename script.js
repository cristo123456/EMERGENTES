// Menú de navegación móvil
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrusel de proyectos
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Validación del formulario de contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validación simple
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        alert('Formulario enviado con éxito!');
        form.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});
