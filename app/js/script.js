let navToggle = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');

if(navToggle != 'indefined') {
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active');
  })
}

// $('.reviews__list').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   adaptiveHeight: true,
//   responsive: [
//     {
//       breakpoint: 1279,
//       settings: {
//         slidesToShow: 1
//       }
//     },
//   ]
// });