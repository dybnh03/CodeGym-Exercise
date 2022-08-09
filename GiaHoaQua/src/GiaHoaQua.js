function HoaQua(){
    let a = document.getElementById("box1").value
    switch (a){
        case 'Măng Cụt':
            document.write("50000 VNĐ/kg")
            break
        case 'Ổi':
            document.write("20000 VNĐ/kg")
            break
        case 'Táo':
            document.write("30000 VNĐ/kg")
            break
        case 'Xoài':
            document.write("30000 VNĐ/kg")
            break
        case 'Cam':
            document.write("40000 VNĐ/kg")
            break
        case 'Chôm Chôm':
            document.write("50000 VNĐ/kg")
            break
        case 'Dưa Hấu':
            document.write("20000 VNĐ/kg")
            break
        default:
            document.write("Không có quả này")

    }
}