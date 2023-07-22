const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(carousel.children);
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const boxWidth = carouselContainer.offsetWidth;
const numVisibleBoxes = Math.floor(boxWidth / carouselItems[0].offsetWidth);
const numTotalBoxes = carouselItems.length;
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - numVisibleBoxes + numTotalBoxes) % numTotalBoxes;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + numVisibleBoxes) % numTotalBoxes;
  showSlide();
});

function showSlide() {
  const distance = -currentIndex * carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(${distance}px)`;
}

window.addEventListener('resize', () => {
  const newBoxWidth = carouselContainer.offsetWidth;
  const newNumVisibleBoxes = Math.floor(newBoxWidth / carouselItems[0].offsetWidth);

  if (newNumVisibleBoxes !== numVisibleBoxes) {
    currentIndex = Math.floor(currentIndex / numVisibleBoxes) * newNumVisibleBoxes;
    numVisibleBoxes = newNumVisibleBoxes;
    showSlide();
  }
});

// Optional: Automatically start the carousel
let intervalId = setInterval(() => {
  currentIndex = (currentIndex + numVisibleBoxes) % numTotalBoxes;
  showSlide();
}, 5000);

carouselContainer.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

carouselContainer.addEventListener('mouseout', () => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + numVisibleBoxes) % numTotalBoxes;
    showSlide();
  }, 5000);
});
