let inputNumber = prompt("Moi nhap vao so can tinh binh phuong");
    inputNumber = parseFloat(inputNumber);

    function TinhBinhPhuong(inputNumber){
        let result;
        let bpNum = inputNumber * inputNumber;
        return result = "Binh phuong cua so vua nhap vao la " + bpNum;
    }


alert(TinhBinhPhuong(inputNumber))