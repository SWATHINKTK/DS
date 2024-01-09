function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while(left <= right){
        mid = Math.floor((left + right)/2);
        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid] < target){
            left = mid +1
        }else{
            right = mid -1 ;
        }
    }
    return -1
}


const arr = [10,20,50,90,125]
console.log(binarySearch(arr,90))