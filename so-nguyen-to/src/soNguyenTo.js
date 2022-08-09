// let count = 2
// for (let i = 1; i <= 9 ; i++){
//     document.write(count + " * " + i + " = " + count*i + "<br>")
// }

// for (let i = 1; i <= 5 ; i++){
//     document.write("<hr width = " + i + "%>");
// }


let inputNum = +prompt("Nhap so can dao nguoc ")
let naturalPart
let remindPart
let count = 1
while(count <= 3){
    naturalPart = Math.floor(inputNum / 10)
    remindPart = inputNum % 10
    console.log(remindPart)
    inputNum = naturalPart
    count ++
}
