class circularQueue{
    constructor(size){
        this.size = size;
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    }

    isEmpty(){
        if(this.front == -1){
            return true;
        }
        return false;
    }

    isFull(){
        if(this.front == 0 && this.rear == this.size - 1 || this.front == this.rear +1 ){
            return true;
        }
        return false;
    }

    enqueue(value){
        if(this.isFull()){
            throw new Error('Queue is Full');
        }
        if(this.front == -1){
            this.front = 0
        }
        this.rear = (this.rear + 1) % this.size ;
        this.queue[this.rear] = value;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is Empty');
        }
        this.queue[this.front] = null;
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.size;
        }

    }

    print(){
        console.log("Queue Elements : ",this.queue)
    }
}

const queue = new circularQueue(4);
queue.enqueue(10);
queue.enqueue(2);
queue.enqueue(30);
queue.enqueue(40);
queue.print()
queue.dequeue();
queue.dequeue();
console.log('After Dequeue');
queue.print()
