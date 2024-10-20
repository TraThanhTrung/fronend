function DanhSachSinhVien(){
        this.DSSV = []
        this.themSV = function(svMoi){
            this.DSSV.push(svMoi)
        }
        this.xoaSV = function(lstSVXoa){
            for(let i = 0; i < lstSVXoa.length ; i++){
                for(let j=0;j<this.DSSV.length;j++){
                    let sv = this.DSSV[j]
                    if(lstSVXoa[i] == sv.maSV){
                        this.DSSV.splice(j,1)
                    }
                }
            }
        }
        this.suaSV = function(SVCapNhap){

        }
        this.timKiem = function(key){

        }
}