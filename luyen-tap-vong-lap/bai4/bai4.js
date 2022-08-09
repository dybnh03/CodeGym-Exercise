
let beforeNum = 0
let afterNum = 1
let sum
let count = 0
for(let i = 1;;i++){
    console.log(beforeNum)
    sum = beforeNum + afterNum
    beforeNum = afterNum
    afterNum = sum
    if(beforeNum%5==0){
        alert("So dau tien chia het cho 5 trong day Fibonacci la :" + beforeNum)
            break;
    }
}