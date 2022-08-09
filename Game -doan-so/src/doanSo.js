function DoanSo() {
    let soMax = parseInt(prompt("Nhap vao so lon nhat muon doan"))
    let soMin = parseInt(prompt("Nhap vao so nho nhat muon doan"))
    let randomNum = Math.floor(Math.random() * (soMax - 1)) + soMin;
    let soBanChon = null

    // let count = 0
    // if (count < 3) {
        do {

            soBanChon = parseInt(prompt("Moi nhap so >= " + soMin + "  va  <=  " + soMax))
            // count++
        } while (soBanChon !== randomNum)


        alert("Chuc mung doan dung so")

    }
    // }else{alert("Ban het luot choi")}
