let str = 'abbrocdbrodebro';
let count = 0;
for(let i = 0; i < str.length ; i++){
    if(str[i] == 'b' && str[i+1] == 'r' && str[i+2] == 'o'){
        count++;
    }
}
console.log('counts : ',count)


insertENd(value){
    const node = new Node(value);
    if(!this.head){
        this.head = node;
    }else{
        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = node;
    }
}