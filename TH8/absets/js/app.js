var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var password2 = document.querySelector('#password2')
var form = document.querySelector('form')

function showError(input, message){
	let parent = input.parentElement
	let small = parent.querySelector('small')
	parent.classList.add('error')
	small.innerText = message
}

function showSuccess(input){
	let parent = input.parentElement
	let small = parent.querySelector('small')
	parent.classList.remove('error')
	small.innerText = ''
}

function checkEmptyError(listInput){
	let isEmptyError = false
	listInput.forEach(input => {	
		if(!input.value.trim()){
			isEmptyError = true
			showError(input , `${getFieldName(input)} is required`)
		}else{
			showSuccess(input)
		}
		
	});
	return isEmptyError
}

function checkEmail(input){
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if(regex.test(input.value.trim())){
		showSuccess(input)
	}else{
		showError(input , 'Email is not valid')
	}
}

function checkLengthError(input , min , max ){
	if(input.value.trim().length < min){
		showError(input , `at leasts ${min} characters `)
	}else if(input.value.trim().length > max){
		showError(input , `up to ${max} characters`)
	}else{
		showSuccess(input)
	}
}

function matchPassword (passwordInput , cfpassword){
	if(passwordInput.value !== cfpassword.value ){
		showError(password2,'Password does not match')
	}
}

function getFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


form.addEventListener('submit', e=>{
	e.preventDefault()

	if(!checkEmptyError([username , email, password, password2])){
		checkEmail(email)
		checkLengthError(username , 5 , 10 )
		checkLengthError(password ,5 , 13 )
		matchPassword (password, password2)
	}
})

