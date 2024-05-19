// ScrollReveal configuration
const scrollReveal = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
    easing: 'ease-out',
  });
  
  // Smooth scrolling to button
  document.querySelector('button a').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

  // Media query for adjusting distance and delay on mobile devices
scrollReveal.reveal('.intro h1', { distance: '50px' });
scrollReveal.reveal('.intro p', { distance: '75px', delay: 250 });
scrollReveal.reveal('.intro button', { distance: '25px', delay: 500 });
scrollReveal.reveal('.propostas_resumo h2', { distance: '50px' });
scrollReveal.reveal('.propostas_resumo p', { distance: '75px', delay: 250 });
scrollReveal.reveal('.proposta_block', { distance: '25px', delay: 50 });
scrollReveal.reveal(".who_are_we h2", { distance: "50px" });
scrollReveal.reveal(".who_are_we h3", { distance: "250px", delay: 50 });
scrollReveal.reveal(".who_are_we h4", { distance: "150px", delay: 50 });
scrollReveal.reveal(".who_are_we p", { distance: "200px", delay: 50 });
scrollReveal.reveal(".who_are_we li", { distance: "300px", delay: 50 });
scrollReveal.reveal(".members h3", { distance: "250px", delay: 50 });
scrollReveal.reveal(".members .card", { distance: "300px", delay: 50 });
scrollReveal.reveal(".members p", { distance: "350px", delay: 50 });
