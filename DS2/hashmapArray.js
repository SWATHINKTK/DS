class HashMap{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value){
        let index = this.hash(key);
        // this.table[index] = value;
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            const keyExist = bucket.find(item => item[0] == key);
            if(keyExist){
                keyExist[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const keyExist = bucket.find(item => item[0] == key);
            if(keyExist){
                console.log("Geting the key value : ",keyExist[1])
            }
        }
        
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            const keyExist = bucket.find(item => item[0] == key);
            if(keyExist){
                bucket.splice(bucket.indexOf(keyExist),1)
            }
        }
    }

    print(){
        console.log("Hash Map Datas")
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i] && this.table[i].length > 0){
                console.log(this.table[i])
            }
        }
    }
}

const map = new HashMap(5);
map.set('name','swathi');
map.set('age',45);
map.set('naem',"QWERTY")
map.print()
console.log('\nAfter Deletion')
map.remove('naem')
map.print()
map.get('name')