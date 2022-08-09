function Cong(){
    let inputNumber1 = document.getElementById("ip1").value
    let Number1 = parseFloat(inputNumber1)
    let inputNumber2 = document.getElementById("ip2").value
    let Number2 = parseFloat(inputNumber2)
    let Cong = Number1 + Number2

    document.write("Result Addition : " + Cong)

}

function Tru(){
    let inputNumber1 = document.getElementById("ip1").value
    let number1 = parseFloat(inputNumber1)
    let inputNumber2 = document.getElementById("ip2").value
    let number2 = parseFloat(inputNumber2)

    let Tru = number1 - number2
    document.write("Result Substraction : " + Tru)
}

function Nhan(){
    let inputNumber1 = document.getElementById("ip1").value
    let Number1 = parseFloat(inputNumber1)
    let inputNumber2 = document.getElementById("ip2").value
    let Number2 = parseFloat(inputNumber2)
    let Nhan = Number1 * Number2
    document.write("Result Multiplication : " + Nhan)
}


function Chia(){
    let inputNumber1 = document.getElementById("ip1").value
    let Number1 = parseFloat(inputNumber1)
    let inputNumber2 = document.getElementById("ip2").value
    let Number2 = parseFloat(inputNumber2)
    let Chia = Number1 / Number2
    document.write("Result Division : " + Chia)
}