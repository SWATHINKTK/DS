class Node{
    constructor(data){
        this.value = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    is_Empty(){
        return this.size === 0;
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
            this.head = node
        }
        this.size++;
    }

    append(data){
        const node = new Node(data);
        let current;
        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    print(){
        let current = this.head;
        let str = '';
        if(this.is_Empty()){
            console.log('Empty LinkedList')
        }else{
            while(current){
                str += current.value + " ";
                current = current.next;
            }
        }
        return str;   
    }

    insertIndex(data,index){
        if(index < 0 || index > this.size){
            console.log('Index Out Of Bound')
        }
        const node = new Node(data);
        if(index == 0){
            this.head = node;
        }else{
            let i = 0;
            let prev = this.head;
            for(let i = 0 ; i < index - 1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    insertValue(data,search){
        if(this.size == 0){
            return -1;
        }
        const node = new Node(data);
            let cur = this.head;
            while(cur && cur.value != search){
                cur = cur.next;
            }
            if(!cur){
                return -1;
            }
            node.next = cur.next;
            cur.next = node;
            this.size++;  
    }

    insertBeforeSearch(data,search){
        if(this.size == 0){
            return -1;
        }
        const node = new Node(data);
        if(this.head.value == search){
            node.next = this.head;
            this.head = node;
            this.size++;
        }else{
            let prev = this.head;
            let cur = this.head;
            while(cur && cur.value != search){
                prev = cur;
                cur = cur.next;
            }

            if(!cur){
                retun -1;
            }

            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index){
        if(index < 0 || index > this.size){
            console.log('Not Existing that node')
        }else{

            if(index == 0){
                this.head = this.head.next;
            }else{
                let prev = this.head;
                for(let i = 0 ; i < index -1 ;i++){
                    prev = prev.next;
                }
                prev.next = prev.next.next;
           
            }
            this.size--; 
        }
    }

    removeSearch(search){
        if(this.size == 0){
            return -1;
        }
        if(this.head.value == search){
            this.head = this.head.next;
            this.size--;
        }else{
            let prev = this.head;
            let current = this.head;
            while(current && current.value != search){
                prev = current;
                current = current.next;
            }

            if(!current){
                return -1;
            }

            prev.next = current.next;
            this.size--;
        }
    }


    removeEnd(){
        if(this.size == 0){
            return 
        }

        if(this.size == 1){
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        let prev = null;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.size--;
    }
}
const list = new LinkedList();
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
console.log('Prepend List :',list.print());
list.append(5)
list.append(6)
list.append(7)
console.log('Append List :',list.print());


