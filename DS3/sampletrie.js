class trieNode{
    constructor(){
        this.children = new Map();
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new trieNode();
    }

    insert(str){
        this.insertHelper(str,0)
    }

    insertHelper(str,idx){
        let trie = this.root;
        for(let i = idx;i < str.length; i++){
            let letter = str.charAt(i)
            if(!trie.has(letter)){
                const newTrie = new trieNode();
                trie.set(letter,newTrie)
            }
            trie = trie.get(letter)
        }
        trie.end = true;
    }
}