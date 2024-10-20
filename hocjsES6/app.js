// pet = {
//     name : "Trà Thanh Trung",
//     age : 18,
//     personality: 'lười',
//     size: {
//         weight:59,
//         height: '1m73'
//     }
// }
// let {name, age , personality } = pet

// let {weight: w , height:h } = pet.size
// console.log(name , age ,w,h)
// let array = ['JAVA' , 'JS', 'PYTHON']
// // let [one,two,three] = array
// // console.log(one , two , three);
// for(let [index , value] of array.entries()){
//     console.log(`${index} : ${value}`)
// }

function Father(name){
    this.name = name
}
// tạo 1 phương thức cho Father 
Father.prototype.createrEyeColor = function(){
    console.log('blue')
}
// kế thừa thuộc tính
function Childrend(ten){
    Father.apply(this,arguments)
}
// kế thừa phương thức
Childrend.prototype = new Father
// Childrend.prototype.createrEyeColor = function(){
//     console.log('white')
// }

let child = new Childrend("con")
console.log(child.name)
child.createrEyeColor()



