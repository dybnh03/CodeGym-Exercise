function KiemTraSoChan(){
let inputNumber = document.getElementById("ip1")
let number = inputNumber.value
    if (number % 2 == 0){
        alert(number + " " + " la mot so chan")
    }
    else{
        alert(number + " " + " khong phai la so chan")
    }
}