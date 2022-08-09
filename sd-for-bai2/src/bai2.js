let sum = 0
let number = null
do {
    number = parseInt(prompt("Moi nhap so "))
}while(number <= 0)

for (let i = 1 ; i <= number ; i++ ){
    sum += i

}

alert("Tong cac so tu 1 den so vua nhap la : " + sum)