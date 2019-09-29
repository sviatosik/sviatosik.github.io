$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu1').toggleClass('menu1_active');
});
