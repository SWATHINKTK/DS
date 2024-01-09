class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value);
        if(this.size == 0){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
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
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
    }

    removeEnd(){
        if(this.size == 0){
            console.log('Empty List')
        }else if(this.size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            let prev = current.prev;
            prev.next = null;
            this.size--;
        }
    }

    removeSearchValue(search){
        let current = this.head;
        while(current){
            if(current.value == search){
                if(current.prev){
                    current.prev.next = current.next;
                }else{
                    this.head = current.next;
                }

                if(current.next){
                    current.next.prev = current.prev;
                }else{
                    this.tail = current.prev;
                }
                break;
            }
            current = current.next
        }
    }


}

const list = new LinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.append(5)
list.print()
list.removeEnd();
console.log('Remove')
list.removeSearchValue(20)
list.print()