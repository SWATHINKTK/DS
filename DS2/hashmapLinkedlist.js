class HashNode{
    constructor(key , value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashLinkedList{
    constructor(){
       this.head = null
    }

    add(key, value){
        const node = new HashNode(key , value)
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            // while(current.next){
            //     if(current.key == key){
            //         break;
            //     }
            //     current = current.next;
            // }

            // if(current.key == key){
            //     current.value = value;
            // }else{
            //     current.next = node;
            // }
            while(current){
                if(current.key == key){
                    current.value = value;
                    return;
                }
                current = current.next;
            }
            node.next = this.head;
            this.head = node;
        }

    }

    get(key){
        let current = this.head;
        while(current){
            if(current.key == key){
                console.log(current.key,current.value)
                return [current.key,current.value];
            }
            current = current.next;
        }
        return undefined;
    }

    remove(key){
        let current = this.head;
        prev = null;
        while(current){
            if(current.key == key){
                if(this.head.key == key){
                    this.head = null;
                }else{
                    prev.next = current.next;
                }
                return current.value;
            }
            prev = current;
            current = current.next ;
        }
        return undefined;
    }
}

class HashMap{
    constructor(size){
        this.size = size;
        this.table = new Array(size).fill(null).map(() => new HashLinkedList())
    }

    hash(key){
        let hash = 0;
        for(let i = 0 ; i < key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }

    set(key,value){
        const index = this.hash(key);
        this.table[index].add(key,value)
    }

    get(key, value){
        const index = this.hash(key);
        return this.table[index].get(key,value)
    }

    print(){
        console.log("Hashmap Datas")
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                let current = this.table[i].head;
                while(current){
                    console.log('[',current.key ,",", current.value,']' );
                    current = current.next;
                }
            }
        }
    }
}

const map = new HashMap(5);
map.set('name','swathi');
map.set('age',45);
map.set('naem',"QWERTY")
map.print();
console.log("Data from the given key",map.get('name'))
