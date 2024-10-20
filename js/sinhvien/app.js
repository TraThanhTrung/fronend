function printListStudent(){
    let maSV = document.getElementById('maSinhVien').value
    let tenSV = document.getElementById('tenSinhVien').value
    let loaiSinhVien = document.getElementById('loaiSinhVien').value
    console.log(loaiSinhVien)
    let diemToan = document.getElementById('diemToan').value
    let diemLy = document.getElementById('diemLy').value
    let diemHoa = document.getElementById('diemHoa').value
    let diemRenluyen = document.getElementById('diemRenLuyen').value
    let dTB = totalDTB(diemToan , diemLy , diemHoa)
    let rank = rankSV(dTB , diemRenluyen)
    document.getElementById('txtTenSV').innerHTML = tenSV
    document.getElementById('txtMaSV').innerHTML = maSV
    document.getElementById('txtLoaiSV').innerHTML = loaiSinhVien
    document.getElementById('txtDiemSV').innerHTML = dTB
    document.getElementById('txtXepLoaiSV').innerHTML = rank
}

function rankSV(diemTB , diemRenluyen){
    if(diemRenluyen <5){
        return 'Yếu'
    }else{
        if(diemTB <5){
            return 'Yếu'
        }else if(diemTB >= 5 && diemTB < 6.5){
            return 'Trung Bình'
        }else if(diemTB >= 6.5 && diemTB < 8){
            return 'Khá'
        }else if(diemTB >= 8 && diemTB < 9){
            return 'Giỏi'
        }else if(diemTB >= 9 && diemTB <= 10){
            return 'Xuất sắc'
        }
    }
}

function totalDTB(diemToan , diemLy , diemHoa){
    return (Number(diemToan) + Number(diemLy) + Number(diemHoa))/3
}

document.getElementById('btnAccep').addEventListener('click', function(){
    printListStudent()
})