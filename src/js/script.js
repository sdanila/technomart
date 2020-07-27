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
      bookmarkSpan = document.querySelector('.header__bookmark a span');
let counterCart = 0,
    counterBokmark = 0,
    arrBuy,
    arrBmark;

console.log(buyButton, bookmarkButton);


function overlayDisplay(qwe) {
  overlay.style.display = qwe;
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

contactsButton.addEventListener('click', function(){overlayDisplay('block')});

modalClose.addEventListener('click', function(){overlayDisplay('none')});

overlay.addEventListener('click', function(e){
  console.log(e.target)
  if ((e.target !== modal) && (e.target.offsetParent !== modal)) {
    overlayDisplay('none');
  }
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

