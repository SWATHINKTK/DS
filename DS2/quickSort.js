// function quickSort(array){
//     quickSortHelper(array,0, array.length - 1);
//     return array;
// }
// function swap(array,i,j){
//     let temp = array[i];
//     array[i] =  array[j];
//     array[j] = temp;
// }
// function quickSortHelper(array,startIndex,endIndex){
//     if(startIndex >= endIndex){
//         return;
//     }
//     let pivotIndex = startIndex;
//     let leftIndex = startIndex + 1;
//     let rightIndex = endIndex;

//     while(leftIndex <= rightIndex){

       
//         if(array[leftIndex] >= array[pivotIndex] && array[rightIndex] <= array[pivotIndex]){
//             swap(array,leftIndex,rightIndex);
//             leftIndex++;
//             rightIndex--;
//         }

//         if(array[leftIndex] <= array[pivotIndex]){
//             leftIndex++;
//         }

//         if(array[rightIndex] >= array[pivotIndex]){
//             rightIndex--;
//         }
//     }
//     swap(array,pivotIndex,rightIndex);
//     quickSortHelper(array,startIndex,rightIndex - 1);
//     quickSortHelper(array,rightIndex +1 , endIndex);
// }

const arr = [65,-7,54,23,43];
// console.log(quickSort(arr))


// ANOTHER WAY TO FIND THE SORTED DATA
function quickSort(array) {
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quickSortHelper(array, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return;
    }

    let pivotIndex = partition(array, startIndex, endIndex);

    quickSortHelper(array, startIndex, pivotIndex - 1);
    quickSortHelper(array, pivotIndex + 1, endIndex);
}

function partition(array, startIndex, endIndex) {
    let pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;

    while (leftIndex <= rightIndex) {
        if(array[leftIndex] >= array[pivotIndex] && array[rightIndex] <= array[pivotIndex]){
            swap(array,leftIndex,rightIndex);
            leftIndex++;
            rightIndex--;
        }

        if(array[leftIndex] <= array[pivotIndex]){
            leftIndex++;
        }

        if(array[rightIndex] >= array[pivotIndex]){
            rightIndex--;
        }
    }

    swap(array, pivotIndex, rightIndex);

    return rightIndex;
}
console.log('Array : ',arr)
quickSort(arr);
console.log('Quick sort : ',arr)
function quickSort(array){
    quickSortHelper(array,0,array.length -1)
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSortHelper(arr,left,right){
    if(left >= right){
        return
    }
    let lb = left + 1;
    let ub = right;
    let pivot = arr[left];
    while(lb <= ub){
        if(arr[ub] <= pivot && arr[lb] >= pivot){
            swap(arr,lb,ub);
            lb++;
            ub--;
        }

        if(arr[ub] >= pivot){
            ub--;
        }

        if(arr[lb] <= pivot){
            lb++;
        }
    }
    swap(arr,ub,left);
    quickSortHelper(arr,left,ub -1);
    quickSortHelper(arr,ub+1,right);
}

