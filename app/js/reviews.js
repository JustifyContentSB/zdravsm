
$('.reviews__list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    },
  ]
});