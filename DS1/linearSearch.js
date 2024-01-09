function linearSearch (arr, target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

const array = [1,78,52,41,20,45];
console.log('Element is found At :',linearSearch(array,550))
console.log('Element is found At :',linearSearch(array,45))