const pi = 3.14;
let banKinh = prompt("Moi nhap vao ban kinh hinh tron ");

function ChuVi(banKinh){
    let result1;
    let P = 2*pi*banKinh;
    return result1 = "Chu vi hinh tron la : " + P;
}


function DienTich(banKinh){
    let result2;
    let S = pi*banKinh*banKinh;
    return result2 = "Dien tich  hinh tron la : " + S;
}

alert(ChuVi(banKinh));
alert(DienTich(banKinh));
