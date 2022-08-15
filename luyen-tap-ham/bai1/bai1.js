let inputNumber1 = prompt("Moi nhap vap so thu nhat");
inputNumber1 = parseFloat(inputNumber1);
let inputNumber2 = prompt("Moi nhap vao so thu hai");
inputNumber2 = parseFloat(inputNumber2);

function SoSanh(inputNumber1, inputNumber2){
    let result 
    if(inputNumber1 > inputNumber2){
       return  result = "So thu nhat lon hon so thu hai";
    }
    else{
        return result = inputNumber1 + inputNumber2;
    }
}

alert(SoSanh(inputNumber1, inputNumber2))
