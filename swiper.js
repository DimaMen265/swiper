const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    mousewheel: true,
    keyboard: true,
    
    autoplay: {
      delay: 1000,
      disableOnInteraction: false, 
      },
      
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
