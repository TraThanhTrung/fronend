let SinhVien = function (){
    this.maSV = ''
    this.tenSV = ''
    this.loaiSinhVien = ''
    this.diemToan = ''
    this.diemLy = ''
    this.diemHoa = ''
    this.diemRenluyen = ''
    this.diemTrungBinh = function(){
        let dtb =  (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3
        return dtb
    }
    this.rank = function(){
        let diemTB = this.diemTrungBinh()
        if(this.diemRenluyen <5){
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

}