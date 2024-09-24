AOS.init();

var swiper = new Swiper('.swiper-slider-thumb', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
});

var swiper2 = new Swiper('.swiper-slider-main', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  }
});

var swiper3 = new Swiper('.swiperSection5', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Viewr JS

const viewerSection5 = document.querySelector('#viewerSection5');
if (viewerSection5){
  new Viewer(viewerSection5);
}

const viewerProductInfo = document.querySelector('#viewerProductInfo');
if (viewerProductInfo){
  new Viewer(viewerProductInfo);
}