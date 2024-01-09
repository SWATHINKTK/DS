class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        if(this.stack.length == 5){
            throw new Error('Stack is Overflow')
        }
        this.stack.push(value)
    }

    pop(){
        if(this.stack.length == 0){
            throw new Error('Stack Underflow');
        }
        let pop = this.stack[this.stack.length -1];
        this.stack.length--;
        return pop;
    }

    peek(){
        if(this.stack.length == 0){
            throw new Error('Stack is Empty')
        }
        return this.stack[this.stack.length - 1]
    }

    clear(){
        this.stack = [];
    }

    print(){
        console.log(this.stack);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log('Stack Elements :')
stack.print();
console.log("Delete element on Stack :");
stack.pop();
stack.print();
console.log("Stack Top Element : ",stack.peek());
