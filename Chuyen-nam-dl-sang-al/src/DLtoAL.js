let input = prompt("Nhap nam duong lich ")
let inputNumber = parseInt(input)

let Can = inputNumber % 10
switch (Can) {
    case 0 :
        Can = "Canh";
        break;
    case 1 :
        Can = "Tan";
        break;
    case 2 :
        Can = "Nham";
        break;
    case 3 :
        Can = "Quy";
        break;
    case 4 :
        Can = "Giap";
        break;
    case 5 :
        Can = "At";
        break;
    case 6 :
        Can = "Binh";
        break;
    case 7 :
        Can = "Dinh";
        break;
    case 8 :
        Can = "Mau";
        break;
    case 9 :
        Can = "Ky";
        break;
}


let Chi = inputNumber % 12
switch (Chi){
    case 0 :
        Chi = "Than";
        break;
    case 1 :
        Chi = "Dau";
        break;
    case 2 :
        Chi = "Tuat";
        break;
    case 3 :
        Chi = "Hoi";
        break;
    case 4 :
        Chi = "Ty";
        break;
    case 5 :
        Chi = "Suu";
        break;
    case 6 :
        Chi = "Dan";
        break;
    case 7 :
        Chi = "Mao";
        break;
    case 8 :
        Chi = "Thin";
        break;
    case 9 :
        Chi = "Ty";
        break;
    case 10 :
        Chi = "Ngo";
        break;
    case 11 :
        Chi = "Mui";
        break;



}

let output = Can + " " +Chi

alert("Nam Am Lich tuong ung la : " + output)

