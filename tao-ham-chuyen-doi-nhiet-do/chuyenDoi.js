function temperatureConverter(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("C").innerHTML = (valNum-32) / 1.8; 
}