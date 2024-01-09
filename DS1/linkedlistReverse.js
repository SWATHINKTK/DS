class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class LinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    append(value){
        const node = new Node(value);
        if(this.size == 0){
            this.head = node;
            this.tail = node;
        }else{
           node.prev = this.tail;
           this.tail.next = node;
           this.tail = node;
        }
        this.size++;    
    }


    print(){
        if(this.size == 0){
            console.log('Empty')
        }else{
            let current = this.head;
            while(current.next){
                console.log(current.value);
                current = current.next;
            }
        }
    }
}


const list = new LinkedList();
list.append(5)
list.append(15)
list.append(25)
list.append(35)
list.append(45)
list.print()