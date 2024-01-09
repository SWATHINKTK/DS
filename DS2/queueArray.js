// class Queue{
//     constructor(){
//         this.queue = [];
//     }

//     enqueue(value){
//         if(this.queue.length == 5){
//             throw new Error('over flow')
//         }
//         this.queue.push(value);
//     }

//     dequeue(){
//         if(this.queue.length == 0){
//             throw new Error('Under flow')
//         }
//         this.queue.shift();
//     }

//     rear(){
//         if(this.queue.length == 0){
//             throw new Error('Queue is Empty')
//         }
//         console.log(this.queue[this.queue.length -1])
//     }

//     front(){
//         if(this.queue.length == 0){
//             throw new Error('Queue is Empty')
//         }
//         console.log(this.queue[0])
//     }

//     print(){
//         console.log(this.queue)
//     }
// }
class Queue{
    constructor(size){
        this.queue = new Array(size);
        this.rear = -1;
        this.front = -1;
        this.size = size;
    }

    enqueue(value){
        if(this.rear == this.size - 1){
            throw new Error('queue is full');
        }
        if(this.front == -1){
            this.front = 0
        }
        this.rear++;
        this.queue[this.rear] = value;
    }

    dequeue(){
        if(this.rear < this.front){
            throw new Error('Queue is empty');
        }
        this.front++;

    }
    print(){
        let q = []
        for(let i = this.front ; i <= this.rear ; i++){
            q.push(this.queue[i])
        }
        console.log("Queue Elements Are : ",q)
    }
}
const queue = new Queue(5);
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log('After Dequeue ')
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
