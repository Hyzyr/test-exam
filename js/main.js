let menu = document.getElementById("nav");
let menuBtn = document.getElementById("burger");
let dropdown = document.querySelector(".nav__inner-dropdown");
let dropdown__menu = document.querySelector(".nav__inner-dropdown-menu");
dropdown.addEventListener("click", () => {
  dropdown__menu.classList.toggle("active");
})
let body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

// Sticky Header
$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});


// Slider
function sliderOnCommand() {
  $(".product__row").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
}
if (window.innerWidth < 1340) {
  sliderOnCommand();
}

function resizeListener(e) {
  if (window.innerWidth < 1340) {
    if (!$(".product__row").hasClass("slick-initialized")) {
      sliderOnCommand();
    }
  } else {
    if ($(".product__row").hasClass("slick-initialized")) {
      $(".product__row").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);