import Swiper from 'swiper/bundle';
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    // slidesPerGroup: 3,  // для группового переключения
    // centeredSlides: true, // центрировать слайд
    roundLengths: true, //для округления значений ширины и высоты слайдов
    loop: true,
    grabCursor: true,
    // loopedSlides: 4,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});