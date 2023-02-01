let swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  slidesPerView: 4,
  autoplay: { delay: 5000 },
  speed : 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('.swiper-slide').on('mouseover', function(){
  swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function(){
  swiper.autoplay.start();
});