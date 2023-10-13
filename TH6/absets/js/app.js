var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var eResult = document.querySelector('.result')

document.addEventListener('keydown', e=>{
    eKey.innerHTML = e.key
    eWhich.innerHTML = e.which
    eCode.innerHTML = e.code
    eResult.innerHTML = e.which
    alert.classList.add('hide')
    box.classList.remove('hide')
})