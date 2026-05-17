// Funcionalidad para formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validar que los campos requeridos no estén vacíos
            if (nombre && email && asunto && mensaje) {
                // Mostrar alerta de éxito
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
                
                // Limpiar formulario
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
    }

    // Efecto hover en las tarjetas del blog
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Activar navbar items cuando se hace scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
    });
});

// Función para cargar contenido dinámico si es necesario
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Procesar contenido cargado
            console.log('Contenido cargado:', data);
        })
        .catch(error => console.error('Error al cargar:', error));
}

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para formatear fechas
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// Log inicial
console.log('Sistema de Gestión de Almacenes - Constructora Ríos Herrera Cargado');
