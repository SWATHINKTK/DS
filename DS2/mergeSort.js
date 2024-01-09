// function mergeSort(array) {
//     return mergeSortHelper(array, 0, array.length - 1);
// }

// function mergeSortHelper(array, lb, ub) {
//     if (lb < ub) {
//         let mid = Math.floor((lb + ub) / 2);
//         mergeSortHelper(array, lb, mid);
//         mergeSortHelper(array, mid + 1, ub);
//         merge(array, lb, mid, ub);
//     }
// }

// function merge(array, lb, mid, ub) {
//     let i = lb;
//     let j = mid + 1;
//     let sorted = [];                 

//     while (i <= mid && j <= ub) {
//         if (array[i] < array[j]) {
//             sorted.push(array[i]);
//             i++;
//         } else {
//             sorted.push(array[j]);
//             j++;
//         }
//     }

//     while (i <= mid) {
//         sorted.push(array[i]);
//         i++;
//     }

//     while (j <= ub) {
//         sorted.push(array[j]);
//         j++;
//     }

//     for (let k = 0; k < sorted.length; k++) {
//         array[lb++] = sorted[k];
//     }
//     console.log(sorted)
// }

const arr = [66,33,2,34,5];
console.log('Array : ',arr);
mergesort(arr)
console.log('After Merge Sort : ',arr);
function mergesort(array){
    mergeSortHelper(array,0,array.length - 1);
}

function mergeSortHelper(arr,lb,ub,){
    if(lb < ub){
        
    let mid = Math.floor((lb+ub)/2);
    mergeSortHelper(arr,lb,mid);
    mergeSortHelper(arr,mid+1,ub);
    merge(arr,lb,mid,ub)
    }
}

function merge(arr,lb,mid,ub){
    let sorted = [];
    let left = lb;
    let right = mid + 1;
    while(left <= mid && right <= ub){
        if(arr[left] <= arr[right]){
            sorted.push(arr[left])
            left++;
        }else{
            sorted.push(arr[right]);
            right++;
        }
    }

    while(left <= mid){
        sorted.push(arr[left])
            left++;
    }

    while(right <= ub){
        sorted.push(arr[right])
            right++;
    }
    for(let i = 0 ; i < sorted.length ; i++){
        arr[lb++] = sorted[i]
    }
}