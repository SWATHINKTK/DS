function factorial(num){
    let fact =1;
    if(num == 0){
        return 1;
    }
    for(let i = num; i > 0 ; i--){
        fact *=i;   
    }
    return fact;
}
// console.log(factorial(5))


function factorialRecursion(num){
    if(num < 1){
        return 1;
    }
    return num * factorialRecursion(num -1)
}
console.log('Factorail of the Number : ',factorialRecursion(5))


