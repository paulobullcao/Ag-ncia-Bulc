document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = Array.from(carouselImages.children);
    const imageCount = images.length;
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100; // Cada imagem ocupa 100% da largura do contêiner
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : imageCount - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < imageCount - 1) ? index + 1 : 0;
        updateCarousel();
    });
});