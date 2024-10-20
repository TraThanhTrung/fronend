let left = document.querySelector('.carousel .carousel__main .left i')

let right = document.querySelector('.carousel .carousel__main .right i')

let imgMain = document.querySelector('.carousel .carousel__main .img__main a img')

let listImg = document.querySelectorAll('.carousel .list__images a img')

let currentI = 0

left.addEventListener('click', function () {
    currentI--
    if (currentI < 0) {
        currentI = listImg.length - 1
    }
    imgMain.src = listImg[currentI].src
})

right.addEventListener('click', function () {
    currentI++
    if (currentI == listImg.length) {
        currentI = 0
    }
    imgMain.src = listImg[currentI].src
})



let slideIndex = 0
// showSlides(slideIndex)

// function plusSlides(n) {
//   showSlides(slideIndex = n+slideIndex)
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("customer__per__content");
//   if (n > slides.length-1) {
//     slideIndex = 0 
//   }
//   if (n == -1) {
//     slideIndex = slides.length-1
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"  
//   }
//   slides[slideIndex].style.display = "flex"
// }
let slides = document.getElementsByClassName("customer__per__content");


slides[slideIndex].style.display = "flex"

function showSlides(){
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'  
  }
  slides[slideIndex].style.display = "flex"
}
document.querySelector('.prev i').addEventListener('click', ()=>{
  slideIndex--
  if(slideIndex < 0){
    slideIndex = slides.length-1
  }
  showSlides()

})
document.querySelector('.next i').addEventListener('click', ()=>{
  slideIndex++
  if(slideIndex == slides.length){
    slideIndex = 0
  }
  showSlides()
})






let partners = document.querySelectorAll('.partner__list .partner__item')
let partnerIndex = 0 

showPartner()

function showPartner(){
  for(var i = 0 ; i < partners.length; i++){
    partners[i].style.display = 'none'
  }
  partners[partnerIndex].style.display = 'grid'
}


document.querySelector('.prev__partner i').addEventListener('click',()=>{
  partnerIndex--
  if(partnerIndex<0){
    partnerIndex= partners.length-1
  }
  showPartner()
})

document.querySelector('.next__partner i').addEventListener('click',()=>{
  partnerIndex++
  if(partnerIndex == partners.length){
    partnerIndex= 0
  }
  showPartner()
})

let carIndex = 0;
let cards = document.querySelectorAll('.card__item');
console.log(cards);
cards[cards.length - 1].style.display = 'none';

let dots = document.querySelectorAll('.dot')

function showDot(){
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[Math.abs(carIndex)].className += " active";
}

document.querySelector('.prev__card i').addEventListener('click', () => {
  carIndex--
    if(carIndex == -1){
      cards[carIndex+1].style.display = 'none'
      cards[cards.length - 1].style.display = 'block'
    }
    console.log(carIndex)
    if (carIndex == -2) {
      carIndex = 0
      cards[carIndex].style.display = 'block'
      cards[cards.length-1].style.display = 'none'
    }
    showDot()  
    
});

document.querySelector('.next__card i').addEventListener('click', (e) => {
    carIndex++
    console.log(carIndex)
    if(carIndex == 1){
      cards[carIndex-1].style.display = 'none'
      cards[cards.length - 1].style.display = 'block'
    } 
    if (carIndex == 2) {
      carIndex = 0
      cards[carIndex].style.display = 'block'
      cards[cards.length - 1].style.display = 'none'
    }
    showDot()
});

const navbar = document.querySelector("header__bottom");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("fixed")
  }else{
    navbar.classList.remove("fixed");
  }
}









