function test(n) {

    const arr = [];

    for(let i=1 ; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            arr.push(i,n/i);
        }
    }

    return [...new Set(arr)].sort((a, b) => a-b);

}


console.log(test(16));

