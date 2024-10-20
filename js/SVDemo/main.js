function DOMjs(id){
    return document.getElementById(id)
}

let danhSachSinhVien = new DanhSachSinhVien()
let vaLiDate = new VaLiDaTion()
function ThemSinhVien(){
    // lay dc du lieu ng dung 
    let masv = DOMjs('masv').value
    let hoten = DOMjs('hoten').value
    let cmnd = DOMjs('cmnd').value
    let sdt = DOMjs('sdt').value
    let email = DOMjs('email').value
    
    // kiem tra validation
    let error = 0
    if(checkEmpty('masv' , masv)){
        error++
    }
    if(checkEmpty('hoten' , hoten)){
        error++
    }
    if(checkEmpty('cmnd' , cmnd)){
        error++
    }
    if(vaLiDate.kiemTraSDT(sdt)){
        DOMjs('sdt').style.borderColor = 'green'
    }else{
        DOMjs('sdt').style.borderColor = 'red'
        error++
    }
    if(vaLiDate.kiemTraEmail(email)){
        DOMjs('email').style.borderColor = 'green'
    }else{
        DOMjs('email').style.borderColor = 'red'
        error++
    }
    if(error !=0){
        return false
    }
    let sinhVien = new SinhVien(masv,hoten,cmnd,sdt,email)
    danhSachSinhVien.themSV(sinhVien)
    capNhapSinhVien(danhSachSinhVien)
}
function checkEmpty(ID , value){
    if(vaLiDate.kiemTraRong(value)){
        DOMjs(ID).style.borderColor = 'red'
        return true
    }else{
        DOMjs(ID).style.borderColor = 'green'
        return false
    }
}
function capNhapSinhVien(danhSachSinhVien){
    let lstTableSV = document.getElementById('tbodySinhVien')
    lstTableSV.innerHTML = ''
    for(let i = 0 ; i < danhSachSinhVien.DSSV.length ; i++){
        // lấy thông tin của sinh viên
        let sv = danhSachSinhVien.DSSV[i]
        // tạo ra thẻ tr
        let trSV = document.createElement('tr')
        // tạo các thẻ td và filter sinh viên thứ i vào 
        let tdCheckBox = document.createElement('td')
        let ckbMaSinhVien = document.createElement('input')
        ckbMaSinhVien.setAttribute('class','ckbMaSV')
        ckbMaSinhVien.setAttribute('type','checkbox')
        ckbMaSinhVien.setAttribute('value',sv.maSV)
        console.log(ckbMaSinhVien)
        let tdMaSV = taoTheID('MaSV',sv.maSV)
        let tdHoTen= taoTheID('hoTen',sv.hoTen)
        let tdCmnd= taoTheID('CMND',sv.CMND)
        let tdSDT= taoTheID('SDT',sv.SDT)
        let tdEmail= taoTheID('Email',sv.Email)
        tdCheckBox.appendChild(ckbMaSinhVien)
        trSV.appendChild(tdCheckBox)
        trSV.appendChild(tdMaSV)
        trSV.appendChild(tdHoTen)
        trSV.appendChild(tdCmnd)
        trSV.appendChild(tdSDT)
        trSV.appendChild(tdEmail)
        lstTableSV.appendChild(trSV)
    }
}
function taoTheID(className,value){
    let td = document.createElement('td')
    td.className = className
    td.innerHTML = value
    return td
}

function SetStorage(){
    // chuyển đổi object mảng danh sách sinh viên thành chuỗi JSON
    let JSONLocalstorage = JSON.stringify(danhSachSinhVien.DSSV)
    // rồi đem chuỗi JSON đặt tên thành DanhSachSinhVien và lưu vào storage
    localStorage.setItem('DanhSachSinhVien',JSONLocalstorage)
}

function GetStorage(){
    // lấy ra chuỗi JSON là mảng danh sách thông qua tên đã đặt
    let JSONLocalstorage = localStorage.getItem('DanhSachSinhVien')
    let mangDSSV = JSON.parse(JSONLocalstorage)
    danhSachSinhVien.DSSV = mangDSSV
    capNhapSinhVien(danhSachSinhVien)
}

function XoaSinhVien(){
    // mảng checkbox
    let lstMaSV = document.getElementsByClassName('ckbMaSV')
    let lstSVChon = []
    for(let i = 0; i<lstMaSV.length;i++ ){
        if(lstMaSV[i].checked){
            lstSVChon.push(lstMaSV[i].value)
        }
    }
    danhSachSinhVien.xoaSV(lstSVChon)
    capNhapSinhVien(danhSachSinhVien)
}



