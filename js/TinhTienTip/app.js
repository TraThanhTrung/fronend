function getEle(id){
    return document.getElementById(id)
}

function caculator(){
    let tongHoaDon = getEle("billamt").value
    let haiLongVaTip = getEle('serviceQual').value
    let soNguoiTip = getEle('peopleamt').value

    if(tongHoaDon === "" || haiLongVaTip == 0){
        alert('vui long nhap thong tin')
        return
    }
    
    if(soNguoiTip === "" || soNguoiTip <=1){
        soNguoiTip = 1 
        getEle('each').style.display = "none" 
    }else{
        getEle('each').style.display = "block"
    }

    let tongTip = Math.round(tongHoaDon*haiLongVaTip)/100
    tongTip = tongTip.toFixed(2)
    getEle("tip").innerHTML = tongTip
    getEle('totalTip').style.display = 'block'
}

getEle('totalTip').style.display = 'none'

getEle("calculate").onclick = function(){
    caculator()
}