const priceUberX = [8000 , 12000 , 10000]
const priceWaitUberX = 2000

const priceUberSUV = [9000 , 14000 , 12000]
const priceWaitUberSUV = 3000

const priceUberBlack = [10000 , 16000 , 14000]
const priceWaitberBlack = 4000

function checkVehicle(){
    let uberX = document.getElementById('uberX')
    let uberSUV = document.getElementById('uberSUV')
    let uberBlack = document.getElementById('uberBlack')

    if(uberX.checked){
        return 'uberX'
    }else if(uberSUV.checked){
        return 'uberSUV'
    }else if(uberBlack.checked){
        return 'uberBlack'
    }
}

function waitTimeChauffeur(waitTime , priceWait){
    let totalWaitPrice = 0
    if(waitTime>3){
        totalWaitPrice = Math.round(waitTime/3.0)*priceWait
    }
    return totalWaitPrice
}

function CacBill(mileage , waitTime , priceWait , arrPrice){
    let totalWaitPrice =  waitTimeChauffeur(waitTime ,priceWait)
    if(mileage<=1){   
        return mileage*arrPrice[0]+ totalWaitPrice
    }else if(mileage<=20){
       
        return arrPrice[0] + (mileage-1)*arrPrice[1] + totalWaitPrice
    }else if(mileage>20){
       
        return arrPrice[0] +(mileage-1)*arrPrice[1] + (mileage-20)*arrPrice[2] + totalWaitPrice
    }
}

function totalBill(){
    let total = 0
    let mileage = document.getElementById('soKM').value
    let waitTime = document.getElementById('thoiGianCho').value
    mileage = parseFloat(mileage)
    waitTime = parseFloat(waitTime)
    let typeVehicle = checkVehicle()
    switch(typeVehicle){
        case 'uberX':
            total = CacBill(mileage, waitTime , priceWaitUberX , priceUberX)
            console.log(total)
        break;
        case 'uberSUV':
            total = CacBill(mileage, waitTime , priceWaitUberSUV , priceUberSUV)
            console.log(total)
        break;
        case 'uberBlack':
            total = CacBill(mileage, waitTime , priceWaitberBlack , priceUberBlack)
            console.log(total)
        break;
    }
    
    return total
}

document.getElementById('btnTinhTien').onclick = function(){
    if(checkVehicle()){
        document.getElementById('divThanhTien').style.display = 'block'
        document.getElementById('xuatTien').innerHTML = totalBill()
    }else{
        alert('Vui lòng nhập phương tiện')
    }
    
}

function renderChiTietkm(vehicle, arrMileage, arrPrice , tblBody ){
    for(var i = 0 ; i < arrMileage.length ; i++){
        let tr = document.createElement('tr')
        
        let typeVehicle = document.createElement('td')
        let useMileage = document.createElement('td')
        let price = document.createElement('td')
        let total = document.createElement('td')

        typeVehicle.innerHTML = vehicle
        useMileage.innerHTML = arrMileage[i]
        price.innerHTML = arrPrice[i]
        total.innerHTML = arrPrice[i] * arrMileage[i]

        tr.appendChild(typeVehicle)
        tr.appendChild(useMileage)
        tr.appendChild(price)
        tr.appendChild(total)

        tblBody.appendChild(tr)
    }
}

function renderChiTietWaitTime(waitTime , priceWaitTime, tblBody){
    let priceWait = waitTimeChauffeur(waitTime , priceWaitTime)
    
    let tr = document.createElement('tr')
    
    let tdWaitTime = document.createElement('td')
    let tdPriceWaitTime = document.createElement('td')
    let tdTotal = document.createElement('td')
    let tdTitleTime = document.createElement('td')

    tdTitleTime.innerHTML = 'Thời gian chờ'
    tdWaitTime.innerHTML =  waitTime + ' phút' 
    tdPriceWaitTime.innerHTML = priceWaitTime
    tdTotal.innerHTML =  priceWait

    tr.appendChild(tdTitleTime)
    tr.appendChild(tdWaitTime)
    tr.appendChild(tdPriceWaitTime)
    tr.appendChild(tdTotal)

    tblBody.appendChild(tr)
}

function renderTotal(totalPrice ,tblBody){
    let tr = document.createElement('tr')
    let tdTotalTitle = document.createElement('td')
    let tdTotal = document.createElement('td')

    tr.className = 'alert alert-success'

    tdTotalTitle.innerHTML = 'Tổng tiền phải trả'
    tdTotal.innerHTML = totalPrice
    tdTotalTitle.setAttribute('colspan', 3)

    tr.appendChild(tdTotalTitle)
    tr.appendChild(tdTotal)

    tblBody.appendChild(tr)
}

function printBill(vehicle , priceWaitTime , waitTime, arrPrice,Mileage  , total){
    let tblBody = document.getElementById('tblBody')
    tblBody.innerHTML = ""

    if(Mileage<=1){
        renderChiTietkm(vehicle, [1], arrPrice , tblBody )
    }else if(Mileage > 1 && Mileage<=20){
        renderChiTietkm(vehicle, [1, Mileage-1], arrPrice , tblBody )
    } else if(Mileage>20){
        renderChiTietkm(vehicle, [1, 19, Mileage-20], arrPrice , tblBody )
    }

    if(waitTime>2){
        renderChiTietWaitTime(waitTime , priceWaitTime, tblBody)
    }

    renderTotal(total ,tblBody)
}

document.getElementById('btnInHD').onclick = function(){
    let kq = getData()
    let total = totalBill()
    let vehicle = checkVehicle()

    switch(vehicle){
        case 'uberX':
            printBill(vehicle ,priceWaitUberX, kq[1] ,priceUberX,kq[0] , total )
        break;
        case 'uberSUV':
            printBill(vehicle ,priceWaitUberSUV, kq[1] ,priceUberSUV,kq[0] , total )
        break;
        case 'uberBlack':
            printBill(vehicle , priceWaitberBlack, kq[1] ,priceUberBlack,kq[0] , total )
        break;
        default: 
        alert('Vui long chon loai xe')
    }
}

function getData(){
    let kq = []
    let mileage = document.getElementById('soKM').value
    kq.push(mileage)
    let waitTime = document.getElementById('thoiGianCho').value
    kq.push(waitTime)
    mileage = parseFloat(mileage)
    waitTime = parseFloat(waitTime)
    return kq
}

