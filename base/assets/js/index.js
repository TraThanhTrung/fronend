const images = document.querySelectorAll('.gallery img')

let right = document.querySelector('.gallery .overlay .right i')

let left = document.querySelector('.gallery .overlay .left i')


const overlay = document.querySelector('.gallery .overlay')

let currentIndex = 0;
images.forEach((img,index) => {
    console.log(img)
    img.addEventListener('click', function(){
        console.log('2')
        currentIndex = index

    })
})