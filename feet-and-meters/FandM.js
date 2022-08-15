function FtoM(feetNum){
    feetNum = parseFloat(feetNum)
    document.getElementById("MetersAfter").innerHTML = feetNum * 0.305
}

function MtoF(metNum){
    metNum = parseFloat(metNum)
    document.getElementById("FootAfter").innerHTML = metNum * 3.279
}