let sinhVien = new SinhVien()
let vaLiDaTion = new VaLiDaTion()
function xuLyXacNhan (){
    sinhVien.tenSV = document.getElementById('tenSinhVien').value
    sinhVien.maSV = document.getElementById('maSinhVien').value
    sinhVien.loaiSinhVien = document.getElementById('loaiSinhVien').value
    sinhVien.diemToan = document.getElementById('diemToan').value
    sinhVien.diemLy = document.getElementById('diemLy').value
    sinhVien.diemHoa = document.getElementById('diemHoa').value
    
    sinhVien.diemRenluyen = document.getElementById('diemRenLuyen').value

    // Kiểm tra rỗng 
    let valid = true
    valid = vaLiDaTion.kiemTraRong(sinhVien.tenSV , 'Tên' , 'error_tenSV' ) 
    & vaLiDaTion.kiemTraRong(sinhVien.maSV , 'Mã' , 'error_maSV' ) 
    & vaLiDaTion.kiemTraRong(sinhVien.diemToan , 'Điểm Toán' , 'error_diemToan' ) 
    & vaLiDaTion.kiemTraRong(sinhVien.diemLy , 'Điểm Lý' , 'error_diemLy' ) 
    & vaLiDaTion.kiemTraRong(sinhVien.diemHoa , 'Điểm Hoá' , 'error_diemHoa' ) 
    & vaLiDaTion.kiemTraRong(sinhVien.diemRenluyen , 'Điểm Rèn luyện' , 'error_diemRenluyen' ) 
    // kiểm tra chữ
    valid = vaLiDaTion.kiemTraAllLetter(sinhVien.tenSV, 'Tên' , 'error_all_letter')
    // kiểm tra số
    valid = vaLiDaTion.kiemTraAllNumber(sinhVien.maSV, 'Mã' , 'error_All_Number') 
    &vaLiDaTion.kiemTraAllNumber(sinhVien.diemToan, 'Điểm Toán'  , 'error_All_Number')
    &vaLiDaTion.kiemTraAllNumber(sinhVien.diemLy, 'Điểm Lý'  , 'error_All_Number')
    &vaLiDaTion.kiemTraAllNumber(sinhVien.diemHoa, 'Điểm Hoá'  , 'error_All_Number')
    &vaLiDaTion.kiemTraAllNumber(sinhVien.diemRenluyen,'Điểm Rèn luyện','error_All_Number')

    valid = 

    document.getElementById('txtTenSV').innerHTML = sinhVien.tenSV
    document.getElementById('txtMaSV').innerHTML = sinhVien.maSV
    document.getElementById('txtLoaiSV').innerHTML = sinhVien.loaiSinhVien
    document.getElementById('txtDiemSV').innerHTML = sinhVien.diemTrungBinh().toFixed(2)
    
    document.getElementById('txtXepLoaiSV').innerHTML = sinhVien['rank']()

}
document.getElementById('btnAccep').onclick = function(){
    xuLyXacNhan()
}