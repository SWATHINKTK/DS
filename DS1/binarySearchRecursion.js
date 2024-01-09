function flat(arr){
    let faltArray =[];

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length){
            faltArray = faltArray.concat(flat(arr[i]))
        }else{
            faltArray.push(arr[i]);
        }
    }

    return faltArray;
}

const arr = [1,2,3,[4,5,6,7],8,9,[10,11,12]];

console.log(flat(arr))