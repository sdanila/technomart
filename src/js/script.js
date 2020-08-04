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

const modalClose = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay'),
      contactsButton = document.querySelector('.contacts__button'),
      buyButton = document.querySelectorAll('.popular__button-buy'),
      bookmarkButton = document.querySelectorAll('.popular__button-bookmark'),
      cartSpan = document.querySelector('.header__cart a span'),
      bookmarkSpan = document.querySelector('.header__bookmark a span'),
      mapClose = document.querySelector('.contacts__close'),
      openMap = document.querySelector('.contacts__open-map'),
      miniMap = document.querySelector('.contacts__mini-map');
let counterCart = 0,
    counterBokmark = 0,
    arrBuy,
    arrBmark;



function display(el, value) {
  el.style.display = value;
}

for (let i = 0; i < buyButton.length; i++) {
  arrBuy = buyButton[i];
  arrBuy.addEventListener('click', e => {
    e.preventDefault();
    cartSpan.innerHTML = ++counterCart;
  }) 
}

for (let i = 0; i < bookmarkButton.length; i++) {
  arrBmark = bookmarkButton[i];
  arrBmark.addEventListener('click', e => {
    e.preventDefault();
    bookmarkSpan.innerHTML = ++counterBokmark;
  }) 
}

contactsButton.addEventListener('click', function(){display(overlay, 'block')});

modalClose.addEventListener('click', function(){display(overlay, 'none')});

overlay.addEventListener('click', function(e){
  if ((e.target !== modal) && (e.target.offsetParent !== modal)) {
    display(overlay, 'none');
  }
});

mapClose.addEventListener('click', function(){display(openMap, 'none')});

miniMap.addEventListener('click', function(e){
  e.preventDefault();
  display(openMap, 'block');
});

  

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

