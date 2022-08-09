let inputSoTien = prompt("Moi nhap so tien : ")
let inputLaiSuat = prompt("Moi nhap lai suat : ")
let inputSoNam = prompt("Moi nhap so nam : ")

let SoTien = parseInt(inputSoTien)
let LaiSuat = parseFloat(inputLaiSuat)
let SoNam = parseFloat(inputSoNam)

let TienLai = SoTien*SoNam*LaiSuat
document.write("So tien lai la : " + TienLai)