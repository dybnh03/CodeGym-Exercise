// let inputNumber = +prompt("Nhap vao so luong cac so nguyen to dau tien")
// for(let i = 1; i <= inputNumber; i++){

// }\







let inputNumber = +prompt("Moi nhap so luong so nguyen to")

while(inputNumber > 0){
    if(CheckSoNguyenTo()){
        // console.log(input)
        // input++
    }
    inputNumber--
}





function CheckSoNguyenTo(){
let input = 2

let count = 0
for(let i = 1; i <= input ; i++){
    if(input % i == 0){
        count++
    }
}



if(count !== 2){

    return false;
}else{

    return true;

}


}





// for(let i = 1; i <= inputNumber;i++){
//     if(count == 2){
//         console.log(input)
//     }input++
// }


