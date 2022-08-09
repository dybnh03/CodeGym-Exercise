let inputNum = +prompt("Moi nhap vao so luong so trong day Fibonacci")
let beforeNum = 0
let afterNum = 1
let sum
let count = 0
while(count < inputNum){
    console.log(beforeNum)
    sum = beforeNum + afterNum
    beforeNum = afterNum
    afterNum = sum
    count ++
}