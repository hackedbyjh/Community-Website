// Initialize swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // Consider disabling autoplay on interaction for better user experience
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, // Makes pagination bullets dynamic
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

