class Node{
    constructor(data){
        this.value = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(data){
        const node = new Node(data);

        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(data){
        const node = new Node(data);

        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.size++;
    }

    display(){
        let current = this.head;
        let ar = [];

        if(!this.head){
            console.log('Empty List');
        }else{
       
            while(current){
                ar.push(current.value);
                current = current.next;
            }
        }
        return ar;
    }
}

const list = new DoublyLinkedList();
list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
console.log('Prepend List : ',list.display());
list.append(60)
list.append(70)
console.log('Append List : ',list.display());
