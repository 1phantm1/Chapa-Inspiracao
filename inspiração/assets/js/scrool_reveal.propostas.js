// ScrollReveal configuration
const scrollReveal = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: "right",
  });
  
  // Smooth scrolling to button
  document.querySelector('button a').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

  // Media query for adjusting distance and delay on mobile devices
scrollReveal.reveal('.inicio', { distance: '50px', reset: true, origin: "top"});
scrollReveal.reveal('.container h1', { distance: '75px', delay: 50, reset: true, origin: "left" });
scrollReveal.reveal('.container p', { distance: '25px', delay: 50, reset: true, origin: "right" });
scrollReveal.reveal('.container button', { distance: '50px', reset: true });
scrollReveal.reveal(".container h2", {distance: "50px", reset: true, origin: "right"})
scrollReveal.reveal('.container li', { distance: '75px', delay: 50, reset: true, origin: "bottom"});
  