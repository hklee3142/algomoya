function isPerfectSquare(n) {
    for(i = 1 ; i * i <= n  ; i++) {

        if(i*i === n) {
            return true;
        }

    }
    return false;
}


function isPerfectSquare2(n) {


    //정수 판단하여 return
    return Number.isInteger(Math.sqrt(n));
}



console.log(isPerfectSquare2(27));