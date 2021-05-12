let navToggle = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');

if(navToggle != 'indefined') {
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('active');
  })
}
