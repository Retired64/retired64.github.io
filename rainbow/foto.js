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
// JavaScript para el control del segundo carrusel
let currentIndexTwo = 0;

function showImageTwo(index) {
  const images = document.querySelectorAll('.custom-carousel-image-two');
  const totalImages = images.length;
  currentIndexTwo = (index + totalImages) % totalImages;
  const offset = -currentIndexTwo * 100;
  document.querySelector('.custom-carousel-inner-two').style.transform = `translateX(${offset}%)`;
}

function nextImageTwo() {
  showImageTwo(currentIndexTwo + 1);
}

function prevImageTwo() {
  showImageTwo(currentIndexTwo - 1);
}

