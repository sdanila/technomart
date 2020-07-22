const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: 400,
  })