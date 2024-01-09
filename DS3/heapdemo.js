
class Heap{
    constructor(){
        this.queue = [];
    }

    buildHeap(arr){
        this.queue = [...arr];
        for(let i = Math.floor(arr.length/2) -1 ; i >= 0 ; i--){
            this.hepifyDown(this.queue,this.queue.length,i);
        }
    }

    hepifyDown(arr,length,i){ 
        let leftIdx = (2 * i) + 1;
        let rightIdx = (2 * i) + 2;
        let largest = i;
        if(leftIdx < length && arr[leftIdx] > arr[largest]){
            largest = leftIdx;
        }

        if(rightIdx < length && arr[rightIdx] > arr[largest]){
            largest = rightIdx;
        }

        if(i != largest){
            this.swap(largest,i);
            this.hepifyDown(arr,length,largest)
        }
    }

    heapsort(){
        let arr = this.queue;
        let n = this.queue.length;
        for(let i = n - 1; i >= 0;i--){
            this.swap(0,i);
            this.hepifyDown(arr,i,0)
        }
    }

    swap(i,j){
        [this.queue[i],this.queue[j]] = [this.queue[j],this.queue[i]];
    }

    insert(value){
        this.queue.push(value)
        this.hepifyUp();
    }

    hepifyUp(){
        let currentIdx = this.queue.length - 1;
        while(currentIdx > 0){
            let parentIdx = (currentIdx - 1)/2;
            if(this.queue[parentIdx] < this.queue[currentIdx]){
                this.swap(parentIdx,currentIdx);
                currentIdx = parentIdx;
            }
        }
    }
}

const bstArray = [50,40,60,90,20,55,75];
console.log("BST array:", bstArray);
const heap = new Heap();
heap.buildHeap(bstArray);
heap.insert(100)
heap.heapsort()
console.log('build Heap :',heap.queue)