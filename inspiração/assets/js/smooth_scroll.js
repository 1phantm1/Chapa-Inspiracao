
// Scroll suave para o botão
document.querySelector('button a').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Configuração do ScrollReveal
ScrollReveal().reveal('.intro h1', { 
    reset: true,
    origin: 'left', 
    distance: '100px', 
    duration: 1000 
});
ScrollReveal().reveal('.intro p', { 
    reset: true,
    origin: 'right', 
    distance: '100px', 
    duration: 1000, 
    delay: 500 
});
ScrollReveal().reveal('.intro button', { 
    reset: true,
    origin: 'bottom', 
    distance: '50px', 
    duration: 1000, 
    delay: 1000 
});
ScrollReveal().reveal('.propostas_resumo h2', { 
    reset: true,
    origin: 'left', 
    distance: '100px', 
    duration: 1000 
});
ScrollReveal().reveal('.propostas_resumo p', { 
    reset: true,
    origin: 'right', 
    distance: '100px', 
    duration: 1000, 
    delay: 500 
});
ScrollReveal().reveal('.proposta_block', { 
    reset: true,
    duration: 1000,
    easing: "ease-out",
    origin: 'bottom', 
    distance: '50px', 
    duration: 1000, 
    interval: 200,
});
ScrollReveal().reveal(".who_are_we h2", {
    reset: true,
    origin: "top",
    distance: "70px",
    duration: 1000,
    delay: 500
})
ScrollReveal().reveal(".who_are_we h3", {
    reset: true,
    origin: "right",
    distance: "500px",
    duration: 1000,
    delay: 500
})
ScrollReveal().reveal(".who_are_we h4", {
    reset: true,
    origin: "bottom",
    distance: "150px",
    duration: 1000,
    delay: 500
})
ScrollReveal().reveal(".who_are_we p", {
    reset: true,
    origin: "left",
    distance: "250px",
    duration: 1000,
    delay: 500
})

ScrollReveal().reveal(".who_are_we li", {
    reset: true,
    origin: "right",
    distance: "350px",
    duration: 1000,
    delay: 500
})
ScrollReveal().reveal(".members h3", {
    reset: true,
    origin: "bottom",
    distance: "500px",
    duration: 1000,
    delay: 500,
})

ScrollReveal().reveal(".members .card", {
    reset: true,
    origin: "left",
    distance: "500px",
    duration: 1000,
    delay: 500,
})
ScrollReveal().reveal(".members p", {
    reset: true,
    origin: "right",
    distance: "500px",
    duration: 1000,
    delay: 500,
})

