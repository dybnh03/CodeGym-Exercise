let cc = prompt("Moi nhap vao chieu cao ")
let chieuCao = parseFloat(cc)

let cn = prompt("Moi nhap vao can nang ")
let canNang = parseFloat(cn)

let BMI = canNang / (chieuCao * 2)

if (BMI < 16){
    alert("BMI cua ban la  " + BMI  + "  :  " + "Gay do 3")
}
else if(16 <= BMI < 17){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Gay do 2")
}
else if(17 <= BMI < 18.5){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Gay do 1")
}
else if(18.5 <= BMI < 25){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Binh thuong")
}
else if(25 <= BMI < 30){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Thua can")
}
else if(30 <= BMI < 35){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Beo phi cap do 1")
}
else if(35 <= BMI < 40){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Beo phi cap do 2")
}
else if(BMI > 40){
    alert("BMI cua ban la :" + BMI  + "  :  " + "Beo phi cap do 3")
}