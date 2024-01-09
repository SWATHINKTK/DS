class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.size == 0){
            this.tail = node;
        }
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.size == 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeEnd(){
        if(this.size == 0){
            return;
        }else{
            let current = this.head;
            let previous = null;
            while(current.next){
                previous = current;
                current = current.next;
            }
           

            if(previous){
                previous.next = null;
                this.tail = previous;
            }else{
                this.head = null;
                this.tail = null;
            }
        }
    }

    LinkedListToArray(){
        const values = [];
        let current = this.head;
        while(current){
            values.push(current.value);
            current = current.next;
        }
        return values;
    }


    arrayToLinkedList(array){
        if(array.length == 0){
            return;
        }
        for(let i = 0; i < array.length ; i++){
            const node = new Node(array[i]);
            if(this.size == 0){
                this.head = node;
                this.tail = node;
            }else{
                this.tail.next = node;
                this.tail = node;
            }
            this.size++;
        }
    }

    // reverse(){

    // }

    print(){
        let current = this.head;
        if(this.size == 0){
            console.log('empty')
            return;
        }
        while(current){
            console.log(current.value);
            current = current.next;
        }
        console.log('tail',this.tail.value)
        return;
    }
}

const list = new LinkedList()
// console.log(list.getSize());
// list.print();
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.append(60);
list.append(70);
// console.log(list.LinkedListToArray())
// list.removeEnd();
list.print();
// console.log(list.getSize());

// const ar = [1,2,3,4,5,6];
// list.arrayToLinkedList(ar);
// list.print();
