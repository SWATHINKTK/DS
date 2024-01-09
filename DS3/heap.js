class Heap{
    constructor(){
        this.queue = [];
    }

    buidHeap(arr){
        this.queue = [...arr];
        for(let i = Math.floor(this.queue.length / 2) -1; i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    heapifyDown(currentIdx){
        let leftIdx = (2 * currentIdx) + 1;
        let rightIdx = (2 * currentIdx) + 2;
        let largeIdx = currentIdx;

        if(leftIdx < this.queue.length && this.queue[leftIdx] > this.queue[largeIdx]){
            largeIdx = leftIdx;
        }

        if(rightIdx < this.queue.length && this.queue[rightIdx] > this.queue[largeIdx]){
            largeIdx = rightIdx;
        }

        if(largeIdx != currentIdx){
            this.swap(currentIdx,largeIdx);
            this.heapifyDown(largeIdx)
        }
    }

    insert(value){
        this.queue.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIdx = this.queue.length - 1;
        while(currentIdx > 0){
            let parentIdx = Math.floor((currentIdx - 1)/2);
            if(this.queue[parentIdx] < this.queue[currentIdx]){
                this.swap(parentIdx,currentIdx);
                currentIdx = parentIdx;
            }else{
                break;
            }
        }
    }

    delete(){
        let lastValue = this.queue.pop();
        this.queue[0] = lastValue;
        this.heapifyDown(0);
    }
    
    swap(i,j){
        [this.queue[i],this.queue[j]] = [this.queue[j],this.queue[i]]
    }
}

const bstArray = [50,40,60,30,20,55,75];
console.log("BST array:", bstArray);
const heap = new Heap();
heap.buidHeap(bstArray);
console.log('build Heap :',heap.queue)
heap.delete()
console.log('After Delete Heap :',heap.queue)


// console.log(heap.queue)
// heap.delete();
// console.log(heap.queue)