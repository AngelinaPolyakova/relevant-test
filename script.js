$(".burger").on("click", function () {
  $(".navigation").fadeToggle();
  $(".callback").fadeToggle();
});

$(".js-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
  slidesToScroll: 1,
  rows: 0,
  prevArrow: $(".arrows__prev"),
  nextArrow: $(".arrows__next"),
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".faq__accordion").accordion();
