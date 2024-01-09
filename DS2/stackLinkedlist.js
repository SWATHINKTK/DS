class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(value){
        if(this.size == 5){
            throw new Error('Stack Overflow')
        }
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop(){
        if(this.size == 0){
            throw new Error('Stack Underfolw')
        }
        this.top = this.top.next;
        this.size--;
    }

    peek(){
        console.log("Stack Top Value : ",this.top.value)
    }

    print(){
        if(this.size == 0){
            console.log('Stack is Empty')
            return;
        }
        let current = this.top;
        let stack = []
        while(current){
            stack.push(current.value);
            current = current.next;
        }
        console.log("Stack Elements : ",stack)

    }
}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(40)
stack.push(50);
stack.print();
console.log("After POP")
stack.pop();
stack.print();
stack.peek();
