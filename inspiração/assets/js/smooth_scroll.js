
// Scroll suave para o botão
document.querySelector('button a').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Configuração do ScrollReveal
ScrollReveal().reveal('.intro h1', { 
    origin: 'left', 
    distance: '100px', 
    duration: 1000 
});
ScrollReveal().reveal('.intro p', { 
    origin: 'right', 
    distance: '100px', 
    duration: 1000, 
    delay: 500 
});
ScrollReveal().reveal('.intro button', { 
    origin: 'bottom', 
    distance: '50px', 
    duration: 1000, 
    delay: 1000 
});
ScrollReveal().reveal('.propostas_resumo h2', { 
    origin: 'left', 
    distance: '100px', 
    duration: 1000 
});
ScrollReveal().reveal('.propostas_resumo p', { 
    origin: 'right', 
    distance: '100px', 
    duration: 1000, 
    delay: 500 
});
ScrollReveal().reveal('.proposta_block', { 
    origin: 'bottom', 
    distance: '50px', 
    duration: 1000, 
    interval: 200 
});
