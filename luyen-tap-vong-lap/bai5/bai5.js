//Tong cua 20 so dau tien trong day fibonacci

let inputNum = +prompt("Nhap so luong so trong day F can tinh tong")
let beforeNum = 0
let afterNum = 1
let sumNum = 0
let sumSequence = 0
let count = 0
while(count < inputNum){
    sumNum = beforeNum + afterNum
    // console.log(beforeNum)
    sumSequence += beforeNum
    beforeNum = afterNum
    afterNum = sumNum
    count++
}

alert("Tong cua " + inputNum + " so trong day Fibonacci la :" + sumSequence )