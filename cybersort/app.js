let a = [3,-6, 8 , -9 , -4 , 5 , 12]

// tim tong
// var tong = 0

// for( var i of a ){
//     tong = tong + i
// }

// console.log(tong)
// 

// let b = [4 , 16 , 7 , 3 , -6 , 8 , 9 , -2 , 5 , 12 , -2]
// let temp

// let firtIndexAm= -1
// for(var i = 0 ; i< b.length; i++){
//     if(b[i]<0){
//         firtIndexAm = i
//         break
//     }
// }

// let indexSoAmMax = firtIndexAm

// let mangIndexAm = []
// if(firtIndexAm != -1){
//     for(var i = firtIndexAm + 1 ; i < b.length ; i++){
//         if(b[i]<0 && b[i] > b[indexSoAmMax]){
//             indexSoAmMax = i
//         }
//     }
//     for(var i = indexSoAmMax ; i < b.length ; i++){
//         if(b[indexSoAmMax] === b[i]){
//             mangIndexAm.push(i)
//         }
//     }
    
//     for(var i of mangIndexAm){
//         console.log('index : ' + i + '  gia tri : ' + b[i])
//     }
    
   
// }else{
//     console.log('khong co so am')
// }

function diemTB(toan , ly , hoa){ 
    return (toan + ly + hoa)/3
}

function xepLoai(){
    let DTB = diemTB(5 , 3 , 7)
    if(DTB >= 9 && DTB <= 10){
        console.log('xuất sắc')
    }
    else if(DTB >= 8 && DTB < 9){
        console.log('Giỏi')
    }
    else if(DTB >= 6 && DTB < 8){
        console.log('Khá')
    }
    else if(DTB >= 5 && DTB < 6){
        console.log('Trung Bình')
    }
    else{
        console.log('Yếu')
    }

}

xepLoai()