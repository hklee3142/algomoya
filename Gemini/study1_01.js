
//소수 찾기 문제
function isPrime(num) {

    //11,16

    for(let i=2 ; i < num ; i++) {
        if(num % i === 0) {
           console.log(i);
           return false;
        }
    }

    return true;
}

console.log(isPrime(7) ? "Prime" : "Not Prime");;


//1,2,3,7,11,
//3,6,9 문제
let arr = [];

for(let i=1 ; i <= 33 ; i++) {
    console.log(String(i));
    
    if(/[3|6|9]/.test(String(i))) {
        arr.push("짝!");
    }else{
        arr.push(String(i));
    }
    
}

console.log(arr.join(","));


const arr2 = Array.from({length:20}, (_, i) => {
    return i+1;
});

console.log(arr2);


console.log(Array.from({length:20}).fill(0));