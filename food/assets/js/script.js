var menu = document.querySelector('#menu-bars')
var navbar = document.querySelector('.navbar')


menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('actives')
}

window.onscroll = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('actives')
}

var IconSearch = document.querySelector('#search-icon')
var closeSearch = document.querySelector('#close')
var FormSearch = document.querySelector('#search__form')

IconSearch.onclick = () => {
    FormSearch.classList.add('actives')
}

closeSearch.onclick = () => {
    FormSearch.classList.remove('actives')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0: {
        slidesPerView : 1,
      },
      640: {
        slidesPerView : 2,
      },
      768: {
        slidesPerView : 2,
      },
      1024: {
        slidesPerView : 3,
      },
    }
  });


