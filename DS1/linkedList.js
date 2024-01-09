class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    prepend(data){
        const node = new Node(data);
        if(this.size == 0){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(data){
        const node = new Node(data);
        if(this.size == 0){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    deleteNode(value){
        
        if(this.size == 0){
            return;
        }

        if(this.head.value == value){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;
        while(current && current.value != value){
            previous = current;
            current = current.next;
        }
        if(!current){
            return;
        }

        previous.next = null;
        this.size--;
    }

    insertAfter(search,value){
        const node = new Node(value);

        let current = this.head;

        while(current && current.value != search){
            current = current.next;
        }

        if(!current){
            return;
        }

        node.next = current.next;
        current.next = node;

    }

    insertBefore(search,value){
        const node = new Node(value);

        let current = this.head;
        let previous = this.head;

        if(this.head.value == search){
            node.next = this.head;
            this.head = node;
            return;
        }

        
        while(current && current.value != search){
            previous = current;
            current = current.next;
        }


        if(!current){
            return;
        }


        node.next = current;
        previous.next = node;
    }

    reverse(){
        let current = this.head;
        let next = null;
        let prev = null;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    removeAllSearchValue(value){
        let current = this.head;
        let prev = this.head;   
        while(current){
            if(current.value == value){
                if(this.head.value == value){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
            }else{
                prev = current;
            }
            current = current.next;
        }

    }

    removeDuplicate(){
        const values = new Set();

        let current = this.head;
        let prev = null;

        while(current){
            if(values.has(current.value)){
                prev.next = prev.next.next;
            }else{
                values.add(current.value);
            }
            prev = current;
            current = current.next;
        }
    }

    display(){
        const ar = []
        if(this.size == 0 ){
            console.log('Empty LinkedList');
            return;
        }else{
            let current = this.head;
            while(current){
                ar.push(current.value);
                current = current.next;
            }
        }
        return ar;
    }
}

const list = new LinkedList();


const array = [9,8,7,5,6,5,5];
for(let i = 0 ; i < array.length ; i++){
    list.prepend(array[i])
}
list.removeAllSearchValue(5)
console.log('Array To Linked List : ',list.display())
// list.insertAfter(8,10);
// console.log('Inset After 8 value : ',list.display())
// list.insertBefore(8,20)
// console.log('Inset Before 8 value : ',list.display())
// console.log('Reverse Linked List : ', list.reverse());
// list.removeDuplicate()
// console.log('After Remove Duplicates : ', list.display())