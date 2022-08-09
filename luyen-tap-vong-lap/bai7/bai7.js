let nameFizz = "Fizz"
let nameBuzz = "Buzz"
let nameFizzBuzz = "FizzBuzz"


for (let i = 1; i <= 100; i++) {
    
    if (  i % 3 == 0) {
        
        document.write(nameFizz + "<br>")
    }
    else if (i % 5 == 0) {
        
        document.write(nameBuzz+ "<br>")
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        
        document.write(nameFizzBuzz+ "<br>")
    }else{
        document.write(i + "<br>")
    }
}