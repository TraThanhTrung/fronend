let images = document.querySelectorAll('.image .image__body .image__list .image__item img')
let buttons = document.querySelectorAll('.image .image__body .image__content a')
buttons.forEach((btn, btnIndex) => { 
    
    btn.addEventListener('click', function(e) {
        let btnFind = btn.getAttribute('type_food')
        document.querySelector('.image .image__body .image__content .active').classList.remove('active')
        btn.classList.add('active')
        images.forEach((img, imgIndex) => {
            let imgFind = img.getAttribute('type_food')

            if (btnFind ==='all'|| imgFind === btnFind) {
                img.classList.add('display')
                img.classList.remove('hide')
            } else {
                img.classList.add('hide')
                img.classList.remove('display')
            }
        })


    })
    
})
