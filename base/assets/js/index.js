const images = document.querySelectorAll('.gallery .gallery__content img')

let imageInner = document.querySelector('.overlay .image__inner img')

let right = document.querySelector('.gallery .overlay .right i')

let left = document.querySelector('.gallery .overlay .left i')

let close = document.querySelector('.gallery .overlay .close i')
const overlay = document.querySelector('.gallery .overlay')
console.log(images)
let currentIndex = 0


images.forEach((img, index) => {
    img.addEventListener("click", function () {

        currentIndex = index;
        
        iconimg()
    });
});

function iconimg() {
    if (currentIndex == 0) {
        left.classList.add('hide')
    } else {
        left.classList.remove('hide')
    }
    if (currentIndex == images.length - 1) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }
    overlay.classList.add('show')
    imageInner.src = images[currentIndex].src
}

left.addEventListener('click', () => {
    currentIndex--
    iconimg() 
})

right.addEventListener('click', () => {
    currentIndex++
    iconimg()
})
close.addEventListener('click', () => {
    overlay.classList.remove('show')
})


