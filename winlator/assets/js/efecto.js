document.addEventListener('DOMContentLoaded', () => {
  const efectos = document.querySelectorAll('.efecto-izquierda');
  
  efectos.forEach((efecto, index) => {
    // Añade una clase de delay basada en el índice
    efecto.classList.add(`delay-${index + 1}`);
    
    // Agrega la clase 'animated' después de un pequeño retraso
    setTimeout(() => {
      efecto.classList.add('animated');
    }, 50 * index); // Cambia el valor de 50 para ajustar el retraso entre elementos
  });
});

window.addEventListener('scroll', () => {
  const efectos = document.querySelectorAll('.efecto-izquierda');
  const windowHeight = window.innerHeight;
  
  efectos.forEach((efecto) => {
    const rect = efecto.getBoundingClientRect();
    
    if (rect.top < windowHeight - 50) {
      efecto.style.opacity = 1;
    } else {
      efecto.style.opacity = 0;
    }
  });
});