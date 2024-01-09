// function mergeSort(arr){
//     mergeSortHerlper(arr,0,arr.length - 1)
// }

// function mergeSortHelper(arr,lb,ub){
//     if(lb < ub){
//         let mid = Math.floor((lb + ub)/2);
//         mergeSortHelper(arr,lb,mid);
//         mergeSortHelper(arr,mid+1,ub);
//         merge(arr,lb,mid,ub);
//     }
// }

// function  merge(arr,lb,mid,ub){
//     let left = lb;
//     let right = mid + 1;
//     let sorted = [];
//     while(left <= mid && right <= ub ){
//         if(arr[left] < arr[right]){
//             sorted.push(arr[left]);
//             left++;
//         }else{
//             sorted.push(arr[right]);
//             right++;
//         }
//     }

//     while(left <= mid){
//         sorted.push(arr[left]);
//         left++;
//     }

//     while(right <= ub)
// }

class StackNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLinkedlist{
    constructor(){
        this.head = null;
    }

    push(value){
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }

    peek(){
        return this.head.value;
    }
}