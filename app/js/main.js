$(function () {
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("header__burger--active");
    $(".menu__list-mob").toggleClass("menu__list-mob--active");
  });

  $(".menu__list-mob li a").click(function () {
    $(".header__burger").removeClass("header__burger--active");
    $(".menu__list-mob").removeClass("menu__list-mob--active");
  });

  $(".says__subtitle").click(function () {
    $(".says").toggleClass("says__active");
  });

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

  let myImageSlider = new Swiper(".says__slider", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      prevEl: ".says__arrow-prev",
      nextEl: ".says__arrow-next",
    },
    pagination: {
      el: ".says__pagination",
      type: "progressbar",
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
    },
  });

  var mySliderAllSlides = document.querySelector(".says__total");
  var mySliderCurrentSlides = document.querySelector(".says__current");

  mySliderAllSlides.innerHTML = myImageSlider.slides.length;

  myImageSlider.on("slideChange", function () {
    var currentSlide = ++myImageSlider.realIndex;
    mySliderCurrentSlides.innerHTML = currentSlide;
  });
});
