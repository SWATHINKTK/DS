class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertHelper(this.root,node);
        }
    }

    insertHelper(root,newNode){
        if(root.value > newNode.value){
            if(!root.left){
                root.left = newNode;
            }else{
                this.insertHelper(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                this.insertHelper(root.right,newNode)
            }
        }
        // let current  = this.root;
        // while(true){
            
        // }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);
            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(15);
tree.insert(9);
tree.insert(8);
tree.insert(7);
// console.log(tree.root)
tree.levelOrder();