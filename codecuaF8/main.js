const register = document.querySelector('.resgister')
const modalPopUp = document.querySelector('.modal')
const exist = document.querySelector('.back')

function toggleModal() {
    modalPopUp.classList.toggle('hide')
}
register.addEventListener('click', toggleModal)
exist.addEventListener('click', toggleModal)


