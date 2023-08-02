// const swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     spaceBetween: 16,
//     speed: 1000,
//     loop: true,
//     mousewheel: true,
//     keyboard: true,
    
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//       },
      
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// Yacht Block

function initSwiper(slidesPerView, spaceBetween, autoplayDelay) {
    return new Swiper('.swiper', {
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      speed: 1000,
      loop: true,
      mousewheel: true,
      keyboard: true,
      autoplay: {
        delay: autoplayDelay,
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
  }

  function handleMediaQueries() {
    const mediaQuery375 = window.matchMedia('(min-width: 375px)');
    const mediaQuery768 = window.matchMedia('(min-width: 768px)');
    const mediaQuery1280 = window.matchMedia('(min-width: 1280px)');

    let swiper;

    const breakpointChecker = () => {
      if (mediaQuery1280.matches) {
        // Desktop
        if (swiper) swiper.destroy(true, true);
        swiper = initSwiper(3, 16, 3000);
      } else if (mediaQuery768.matches) {
        // Tablet
        if (swiper) swiper.destroy(true, true);
        swiper = initSwiper(2, 16, 3000);
      } else if (mediaQuery375.matches) {
        // Mobile
        if (swiper) swiper.destroy(true, true);
        swiper = initSwiper(1, 8, 3000);
      }
    };

    breakpointChecker();

    window.addEventListener('resize', breakpointChecker);
  }

  handleMediaQueries();