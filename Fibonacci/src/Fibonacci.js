//Cach1

// let inputNUmber = +prompt("Nhap so luong so cua day Fibonacci")
// let count = 1
// let frontNum = 0
// let behindNum = 1
// while(count <= inputNUmber){
//     console.log(frontNum)
//     frontNum = behindNum
//     behindNum+= frontNum
//     count ++
// }


//Cach2
// let inputNUmber = +prompt("Nhap so luong so  chan cua day Fibonacci")
// let count = 1
// let frontNum = 0
// let behindNum = 1
// while(count <= inputNUmber/2){
//     console.log(frontNum)
//     console.log(behindNum)
//     frontNum += behindNum
//     behindNum += frontNum
//     count ++
// }

//Cach 3
let inputNUmber = +prompt("Nhap so luong so cua day Fibonacci")
let count = 1
let frontNum = 0
let behindNum = 1
let sum

while(count <= inputNUmber){
    sum = frontNum + behindNum
    alert(frontNum)
    frontNum = behindNum
    behindNum = sum
    count++
}
