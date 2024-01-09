class QueueNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedlist{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){
        if(this.size == 5){
            throw new Error('Queue Overflow')
        }
        const node = new QueueNode(value);
        if(!this.front){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue(){
        if(this.size == 0){
            throw new Error('Queue Under flow')
        }
        if(this.front == this.rear){
            this.front = null;
            this.rear = null;
        }else{
            this.front = this.front.next;
        }
        this.size--;
    }

    peek(){
        return this.front ? this.front.value : null;
    }

    isEmpty(){
        return this.front == null;
    }

    print(){
        let current = this.front;
        let q = []
        while(current){
            q.push(current.value)
            current = current.next;
        }
        console.log("Queue Elements : ",q)
    }
}

const queue = new QueueLinkedlist();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
console.log("After Dequeue")
queue.dequeue();
queue.print();
console.log("Peek Element : ",queue.peek());