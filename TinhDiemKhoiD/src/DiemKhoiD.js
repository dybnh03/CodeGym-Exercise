function TinhDiem() {
    let a = document.getElementById("ip1").value
    let diemToan = parseInt(a)
    let b = document.getElementById("ip2").value
    let diemVan = parseInt(b)
    let c = document.getElementById("ip3").value
    let diemAnh = parseInt(c)

    let Sum = diemToan + diemVan + diemAnh

    let list = document.getElementById("add").value;
    switch (list){
        case "1":
            let add1 = 0.75
            let diemTong1 = Sum + add1
            document.writeln("Tong diem DH khoi D cua ban la : " + diemTong1)
            break
        case "2":
            let add2 = 0.25
            let diemTong2 = Sum + add2
            document.writeln("Tong diem DH khoi D cua ban la : " + diemTong2)
            break
        case "3":
            let add3 = 0.5
            let diemTong3 = Sum + add3
            document.writeln("Tong diem DH khoi D cua ban la : " + diemTong3)
            break
        case "4":
            let add4 = 0
            let diemTong4 = Sum + add4
            document.writeln("Tong diem DH khoi D cua ban la : " + diemTong4)
            break
    }

}