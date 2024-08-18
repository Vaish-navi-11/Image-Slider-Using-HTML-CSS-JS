const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentImage = 0;

function slide() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}


document.querySelector('.prev').addEventListener('click', () => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].classList.add('active');
});

document.querySelector('.next').addEventListener('click', () => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
});