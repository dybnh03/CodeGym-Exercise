let inputBanKinh = prompt("Moi nhap vao ban kinh hinh tron : ")
let BanKinh = parseFloat(inputBanKinh)
const pi = 3.14
let P = 2*pi*BanKinh
let S = pi*(BanKinh^2)

document.writeln("Chu vi hinh tron la : " + P)
document.writeln("Dien tich hinh tron la : " + S)
