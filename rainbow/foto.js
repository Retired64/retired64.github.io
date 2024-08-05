// JavaScript para el control del carrusel
let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('.custom-carousel-image');
  const totalImages = images.length;
  currentIndex = (index + totalImages) % totalImages;
  const offset = -currentIndex * 100;
  document.querySelector('.custom-carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}
