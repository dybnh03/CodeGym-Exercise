let inputNum = +prompt("Moi nhap vao so luong so dau tien chia het cho 7 can tinh tong")
let sum = 0
for(let i = 0; i <= 7*inputNum;i++){
    if(i % 7 == 0){
        sum+= i
        
    }
}
alert(sum)