function TinhGiaiThua(inputNum) {
    let count = 1;
    for (let i = 1; i <= inputNum; i++) {
        count *= i;
    }
    return count;

}

function HienThi() {
    let inputNum = +prompt("Moi nhap vao so can tinh giai thua");
    inputNum = parseInt(inputNum);

    alert(inputNum + "! = "+ TinhGiaiThua(inputNum));
}

alert(HienThi());