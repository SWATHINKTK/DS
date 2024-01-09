// const arr = [45,-20,56,12,85]; 
// let swapped;
// do{
//     swapped = false;
//     for(let i = 0 ; i < arr.length - 1 ; i++){
//         if(arr[i] > arr[i +1]){
//             let temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] =temp; 
//             swapped = true
//         }
//     }
// }while(swapped)
const arr = [45,-20,56,12,85]; 
for(let i = 0 ; i < arr.length -1 ; i++){
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log("Sorted Array : ",arr)