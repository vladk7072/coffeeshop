
$(function () {
  $(".star").rateYo({
    rating: 4,
    starWidth: "17px",
    ratedFill: "#C99E71",
    spacing: "7px",
  });
  $(".says__stars").rateYo({
    rating: 5,
    starWidth: "20px",
    ratedFill: "#FAA61A",
    spacing: "4px",
  });

  new Swiper(".says__slider", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      eventsTarget: ".says__slider",
    },
    navigation: {
      prevEl: ".says__arrow-prev",
      nextEl: ".says__arrow-next",
    },
    pagination: {
      el: ".says__pagination",
      type: "progressbar",
    },
  });

  
  // let arrowPrev = document.querySelector('.says__arrow-prev');
  // let arrowNext = document.querySelector('.says__arrow-next');

  // let saysCurrent = document.querySelector('.says__current');
  // let saysSepparator = document.querySelector('.says__sepparator');
  // let saysTotal = document.querySelector('.says__total');
});
