function positionChange(arr,val){
    let i = 0;
    let j = arr.length -1;
    let temp;
    while(i < j){
        if(arr[i] == val){
            if(arr[j] == val){
                j--;
            }
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
            j--;
        }else{
    
            i++;
        }
        
    }
    return arr;
}


const array = [50,10,20,50,60,80,50,50,60,80,50];
console.log(positionChange(array,50))