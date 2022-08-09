let firstNumber = +prompt("Moi nhap so dau tien cua day")
let printFirstNumber = firstNumber
let lastNumber = +prompt("Moi nhap so cuoi cung cua day")
let sum = 0
for(firstNumber; firstNumber <= lastNumber; firstNumber++){ 
    sum+= firstNumber;
}

    alert("Tong cac so tu " + printFirstNumber + " den " + lastNumber + " la : " + sum)
