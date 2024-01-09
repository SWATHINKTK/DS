function print(arr,sum){
    const check = new Set();
    for(let i = 0 ; i < arr.length ; i++){
        const balance = sum - arr[i];
        if(check.has(balance)){
            return [arr[i],balance]
        }else{
            check.add(arr[i])
        }
    }
}

const array = [10,4,5,3,10,6];
console.log(print(array,10))