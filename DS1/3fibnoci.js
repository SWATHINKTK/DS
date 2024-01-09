function fibnociSeries(num){
    const fib = [0,1];
    for(let i = 2 ; i <= num ; i++){
        fib.push(fib[i-2] + fib[i-1])
    }
    return fib
}

// console.log(fibnociSeries(10))


function fibnoci(num){
    if(num < 2){
        return num;
    }
    return fibnoci(num -1) + fibnoci(num -2)
}

let fib = [];
for(let i = 0 ; i <= 10; i++){
    fib.push(fibnoci(i))
}
console.log('Fibnacii Series : ' ,fib)

