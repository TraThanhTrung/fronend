const result = document.getElementById('result');
const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');

const check = () => {
    const valueInput = input.value; // Khai báo valueInput trước
    const cleanValue = valueInput.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if(!valueInput){
        alert("Please input a value")
    }else{
           // Kiểm tra nếu input không khớp với bất kỳ cái nào trong arr
           if (cleanValue === cleanValue.split("").reverse().join("")) {
            result.innerText = `${valueInput} is a palindrome`; // Nếu là palindrome
        } else {
            result.innerText = `${valueInput} is not a palindrome`; // Nếu không phải là palindrome
        }
    }
    }

         
    


button.addEventListener('click', check);
