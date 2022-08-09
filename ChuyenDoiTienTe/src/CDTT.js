function ChuyenDoi() {

    let input = document.getElementById("money").value
    let inputNumber = parseFloat(input)

    let inputFrVNCurrency = document.getElementById("VNdongF").value

    let inputToUSDCurenCy = document.getElementById("USDT").value





    let VNConvertUSD = inputNumber / 23000






    if (inputFrVNCurrency && inputToUSDCurenCy) {
        document.writeln("Result : " + VNConvertUSD)
    }

}