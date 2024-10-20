let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

// lay ID
const getID = (id) => {
    return document.getElementById(id)
}
// import cac lop doi tuong vao main
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";


let glassesList = new GlassesList()
// Hien thi danh sach kinh 
// khai bao ham
const showGlassesList = () =>{
    const divGlassesList = getID('vglassesList')
    // Tao doi tuong kinh va them kinh vao danh sach kinh 
    // B1 : duyet mang du lieu
    dataGlasses.map((item,index)=>{
        let gl = new Glasses(item.id ,item.src,item.virtualImg,item.brand,item.name,item.color,item.price,item.description)
        glassesList.addGlassList(gl)
        
    })
    // console.log(glassesList.gList)
    divGlassesList.innerHTML = glassesList.renderGlasses()
}
showGlassesList()
  
const tryOnGlasses = (e) => {
    let gId = e.target.getAttribute('data-id')
    
    let gObject = {}
    glassesList.gList.map((item, index) => {
        if(item.id == gId){
            gObject = item
            console.log(gObject)
        }
    })
    // for(let value of glassesList.gList){
    //     if(item.id == gId){
    //         gOject = item
    //     }
    // }
    showGlasses(gObject)
    
}

window.tryOnGlasses =tryOnGlasses

const showGlasses = (gObject) => {
    let divAvatar = getID("avatar")
    let divglassesInfo = getID("glassesInfo")
    let status = ""
    if(gObject.status){
        status = "Stoking"
    }else{
        status = "Sold Out"
    }
    divAvatar.innerHTML = `
        
    <img id = "clickGlasses" src="${gObject.virtuaImg    }" >
        
    `
    divglassesInfo.innerHTML = `
    <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
    <p class="card-text">
        <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
        <span class="text-success">${status}</span>
    </p>
    <p class="card-text">
        ${gObject.desc}
        
    </p>
    `
    divglassesInfo.style.display = "block"

    
   
}

const removeGlasses = (isDisplay) => {
    let clickButton = getID('clickGlasses')
    
    if(clickButton != null){
        if(isDisplay){
            clickButton.style.opacity = "0.9"
        }else{
            clickButton.style.opacity = "0"
        }
    }else{
        return
    }
}

window.removeGlasses = removeGlasses
