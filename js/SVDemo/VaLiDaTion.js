function VaLiDaTion(){
    this.kiemTraRong = function(value){
        if(value.trim() === ''){
            return true
        }
        return false
    }
    this.kiemTraEmail = function(value){
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return regex.test(value.toLowerCase())
    }
    this.kiemTraSDT = function (value){
        let regex = /^[0-9]+$/
        if(regex.test(value) && value.length >=11){
            return true
        }
        return false
    }
}