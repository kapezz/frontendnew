import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper', {
speed: 400,
spaceBetween: 100,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
}  
});