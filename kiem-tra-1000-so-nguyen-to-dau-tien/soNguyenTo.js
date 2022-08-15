function CheckSoNguyenTo(num){

    let count = 0
    for(let i = 1; i <= num ; i++){
        if(num % i == 0){
            count++
        }
    }
    
    
    
    if(count !== 2){
    
        return false;
    }else{
    
        return true;
    
    }
    
    
    }

    for(let i = 1; i <= 1000; i++){
        if(CheckSoNguyenTo(i)){
            console.log(i)
        }
    }