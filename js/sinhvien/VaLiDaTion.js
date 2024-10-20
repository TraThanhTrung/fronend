let VaLiDaTion = function () {
    this.kiemTraRong = function (input , name , error){
        let selectorError = document.getElementById(error) 
        if(input.trim() == ''){
            selectorError.innerHTML = name + ' không được để trống'
            selectorError.style.display = 'block'
            selectorError.style.color = 'red'
            return false
        }
        selectorError.innerHTML = ''
        selectorError.style.display = 'none'
        return true
    }
    this.kiemTraAllLetter = function (input , name , error){
        let selectorError = document.getElementById(error) 
        let regex = /^[a-zA-Z]+$/
        if(input.trim() != ''){
            if(!regex.test(input.trim())){
                selectorError.innerHTML = name + ' phải là chữ'
                selectorError.style.display = 'block'
                selectorError.style.color = 'red'
                return false
            }
            selectorError.innerHTML = ''
            selectorError.style.display = 'none'
            return true
        }
        
        
    }
    this.kiemTraAllNumber = function (input , name , error){
        let selectorError = document.getElementById(error) 
        let regex = /^[0-9]+$/
        if(input.trim() != ''){
            if(!regex.test(input.trim())){
                selectorError.innerHTML = name + ' phải là số'
                selectorError.style.display = 'block'
                selectorError.style.color = 'red'
                return false
            }
            selectorError.innerHTML = ''
            selectorError.style.display = 'none'
            return true
        }
    }
    this.kiemTraToiDa = function(input, name , error , min, max){
        let selectorError = document.getElementById(error) 
        if(input.trim().length < min || input.trim().length >max){
            selectorError.innerHTML = name + ' tối đa ' + max
            selectorError.style.display = 'block'
            selectorError.style.color = 'red'
            return false
        }
        selectorError.innerHTML = ''
        selectorError.style.display = 'none'
        return true
    }
    
}