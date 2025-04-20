// Simulación de carga de página
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader-container').style.opacity = 0;
        setTimeout(function() {
            document.querySelector('.loader-container').style.display = 'none';
        }, 500);
    }, 1000);
});

// Control del carrito modal
document.getElementById('cartBtn').addEventListener('click', function() {
    document.getElementById('cartModal').classList.add('active');
});

document.querySelector('.floating-cart').addEventListener('click', function() {
    document.getElementById('cartModal').classList.add('active');
});

// Cerrar modal
document.querySelectorAll('.close-modal').forEach(function(btn) {
    btn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('active');
    });
});

// Cerrar modal al hacer clic fuera
document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// Selector de región
document.querySelector('.current-region').addEventListener('click', function() {
    document.querySelector('.region-selector').classList.toggle('active');
});

document.addEventListener('click', function(e) {
    const regionSelector = document.querySelector('.region-selector');
    if (!regionSelector.contains(e.target)) {
        regionSelector.classList.remove('active');
    }
});

// Mostrar notificación toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    
    document.querySelector('.toast-container').appendChild(toast);
    
    setTimeout(function() {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() {
            toast.remove();
        }, 300);
    }, 3000);
}

// Añadir al carrito eventos
document.querySelectorAll('.btn-primary, .candy-btn').forEach(function(btn) {
    if (!btn.disabled) {
        btn.addEventListener('click', function() {
            const productName = this.closest('.product-card, .candy-card').querySelector('.product-title, .candy-title').textContent;
            showToast(`¡${productName} añadido al carrito!`);
            
            // Actualizar contador del carrito (simulación)
            const currentCount = parseInt(document.querySelector('.cart-count').textContent);
            document.querySelector('.cart-count').textContent = currentCount + 1;
            document.querySelector('.floating-cart-count').textContent = currentCount + 1;
        });
    }
});

// Carrusel de testimonios (simulación)
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Implementación del carrusel
    if (slides.length > 0) {
        currentSlide = (n + slides.length) % slides.length;
        document.querySelector('.testimonial-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar puntos
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
}

// Inicializar componentes
document.addEventListener('DOMContentLoaded', function() {
    // Cualquier inicialización adicional aquí
});