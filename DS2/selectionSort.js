const array = [34,21,76,44,56,90,4];
function selectionSort(array){
    for(let i = 0 ; i < array.length -1 ;i++){
        let minIndex = i;
        for(let j = i +1 ; j < array.length ; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        if(i != minIndex){
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

console.log("Selection Sort : ",selectionSort(array))