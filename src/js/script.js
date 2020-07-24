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

$(document).ready(function(){
  
  $('ul.service__tabs').on('click', 'li:not(.service__tab_active)', function(){
    $(this)
      .addClass('service__tab_active').siblings().removeClass('service__tab_active')
      .closest('div.container').find('.service__content').removeClass('service__content_active')
      .eq($(this).index()).addClass('service__content_active');
  })


  $('.popular__item').hover(
    function() {
      $(this)
        .find('img.popular__image').addClass('popular__image_on-hover')
        .closest('div.container').find('.popular__buttons')
        .eq($(this).index()).addClass('popular__buttons_active');
    },
    function() {
      $('img.popular__image')
        .removeClass('popular__image_on-hover').closest('div.container')
        .find('.popular__buttons').removeClass('popular__buttons_active');
    }
  )
})

