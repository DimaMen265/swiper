const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    mousewheel: true,
    keyboard: true,
    
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
