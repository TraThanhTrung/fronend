    function validationAll(){
        let isValid = true;
        if (!checkEmpty('firstName', 'error_firstName')) {
            isValid = false;
        }
        if (!checkEmpty('lastName', 'error_lastName')) {
            isValid = false;
        }
        if (!checkEmpty('email', 'error_email')) {
            isValid = false;
        }   
        if (!checkEmpty('phone', 'error_phone')) {
            isValid = false;
        }
    
        // Kiểm tra và hiển thị thông báo lỗi cho các điều kiện khác
        if (!checkAllLetter('firstName', 'error_firstName_all_leter')) {
            isValid = false;
        }
        if (!checkAllLetter('lastName', 'error_firstName_all_leter')) {
            isValid = false;
        }
        if (!checkPhone('phone', 'error_phone_check')) {
            isValid = false;
        }
        if (!checkGmail('email', 'error_email_all_number')) {
            isValid = false;
        }
    
        return isValid;

    return isValid;
        
    }   
    
    function validationFirstName(){
        return checkEmpty('firstName','error_firstName')
    }

    function validationLastName(){
        return checkEmpty('lastName','error_lastName')  
    }

    function validationPhone(){
        return checkEmpty('phone','error_phone') 
    }

    function validationGmail(){
        return checkEmpty('email','error_email')
    }

    function checkEmpty(idValue , iderror){
        let valid = true
        let inputValue = document.getElementById(idValue)
        let error = document.getElementById(iderror)
        if(inputValue.value.trim() === ''){
            error.innerHTML = inputValue.name + ' không được bỏ trống'
            error.style.display = 'block'
            return false
        }else{
            error.innerHTML = ''
            error.style.display = 'none'
            return true
        }
    }
    // check all number
    function checkPhone(idInput , iderror){
        let input = document.getElementById(idInput)
        let error = document.getElementById(iderror)
        let regex = /^[0-9]+$/
        if(!regex.test(input.value.trim())){
            error.innerHTML = input.name + ' phải là số'
            error.style.display = 'block'
            return false
        }else{
            error.innerHTML = ' '
            error.style.display = 'none'
            return true
        }
    }
    // check all letter 
    function checkAllLetter(idValue , iderror){
        let inputValue = document.getElementById(idValue)
        let error = document.getElementById(iderror)
        let regex = /^[a-zA-Z]+$/
        if(!regex.test(inputValue.value.trim())){
            error.innerHTML = inputValue.name + ' phải là chữ'
            error.style.display = 'block'
            return false
        }else{
            error.innerHTML = ''
            error.style.display = 'none'
            return true
        }
    }

    // check gmail 

    function checkGmail(idValue , iderror){
        let inputValue = document.getElementById(idValue)
        let error = document.getElementById(iderror)
        let regex = /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/ 
        
        if(!regex.test(inputValue.value.trim())){
            error.innerHTML = 'Phải là Email'
            error.style.display = 'block'
            error.style.fontSize = '12px'
            error.style.color = 'red'
            return false
        }else{
            error.innerHTML = ''
            error.style.display = 'none'
            return true
        }
    }

    document.getElementById('firstName').onblur = validationFirstName ;
    document.getElementById('lastName').onblur = validationLastName;
    document.getElementById('phone').onblur = validationPhone;
    document.getElementById('email').onblur = validationGmail


    document.getElementById('btnDangKy').onclick = function(e){
        validationAll()
        if(!validationAll()){
            e.preventDefault()
        }
    }
    