

function Validator(option) {
    function validate ( inputElement , rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector)
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }        
    var formElement = document.querySelector(option.form)
    if(formElement){
        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
           
            if(inputElement){
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }
            
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(option.errorSelector)
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }    
            }
        });
    };
}

    

Validator.isRequired = function(selector){
    return {
        selector : selector,
        test : function(value){
            return value.trim() ? undefined : "vui long nhap thong tin vao"
        }
    };
}

Validator.isEmail = function(selector){
    return {
        selector : selector,
        test : function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value ) ? undefined : 'vui long nhap dung email'
        }
    };
}

Validator.minLength = function(selector, min){
    return {
        selector : selector,
        test : function(value){
            return value.length >= min ? undefined : `vui long nhap toi thieu ${min} ki tu`
        }
    };
}