
let inputNum = +prompt("Nhap so can dao nguoc")

let inputNumFake = inputNum

let count2 = 0

while(inputNumFake > 0){
    inputNumFake = Math.floor(inputNumFake / 10)
    count2++
};

let count3 = count2



let nguyenNum = Math.floor(inputNum/10)
let duNum = inputNum % 10


while(0 < count3){
    duNum = inputNum % 10
    console.log(duNum)
     nguyenNum = Math.floor(inputNum / 10)
     inputNum = nguyenNum
    count3--
}


















































//In ra n so chan dau tien




//Cach1

// let inputNumber = +prompt("Nhap so")
// for(let i = 1; i <= inputNumber; i++ ){
//     document.write("So chan thu " + i + "la : " + (2*i) )
// }




//Cach2

// let inputNumber = +prompt("Nhap so")
// for(let i = 2; i <= 2*inputNumber;i++){
//     if(i % 2 == 0){
//         document.write(i + " ")
//     }
// }


//Cach3

// let inputNumber = +prompt("Moi nhap so luong so chan ")
// let count = 1
// let exampleNumber = 2
// while(count <= inputNumber){
//     document.write(2*count)
//  count++
// }




//Cach 4

// let inputNumber = +prompt("Nhap so")
// let count = 1
// while (count <= inputNumber) {

//     if(count % 2 !== 0){
//         document.write(2*count)
//     }else{
//         document.write(2*count)
//     }
//     count++
// }
















