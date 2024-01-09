class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
           this.insertNewNode(this.root,node);
        }
    }

    insertNewNode(root,newNode){
        if(root.value > newNode.value){
            if(root.left == null){
                root.left = newNode;
            }else{
                return this.insertNewNode(root.left, newNode);
            }
        }else{
            if(root.right == null){
                root.right = newNode;
            }else{
                return this.insertNewNode(root.right,newNode);
            }
        }
    }

    search(value){
        return this.searchNode(this.root,value);
    }

    searchNode(root, value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
                return true
            }else if(root.value > value){
                return this.searchNode(root.left,value);
            }else{
                return this.searchNode(root.right,value)
            }
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root){
        if(root){
            this.preorder(root.left);
            this.preorder(root.right);
            console.log(root.value);
        }
    }

    levelorder(root){
        const queue = [];
        queue.push(root)
        while(queue.length){
            const current = queue.shift();
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }

    minroot(root){
        if(!root.left){
            return root.value;
        }else{
            return this.minroot(root.left);
        }
    }

    
    deleteNode(root, value) {
        if(root === null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && ! root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.minroot(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isBst(){
        let previous = -Infinity;
        let isVaild = true;
        function inorderCheck(root){
            if(root){
                inorderCheck(root.left);
                if(root.value <= previous){
                    isVaild = false;
                    return false;
                }
                previous = root.value;
                return inorderCheck(root.right);
            }
            return true;
        }
        return inorderCheck(this.root)
    }
}

const Bst = new BinarySearchTree();
// console.log(Bst.isEmpty());
// Bst.insert(3)
// Bst.insert(1)
// Bst.insert(2)
// Bst.insert(0)
// Bst.insert(4)
// Bst.levelorder(Bst.root);
// console.log("Rsult ....................",Bst.deleteNode(Bst.root,1,i=0))
// Bst.levelorder(Bst.root);
// console.log(Bst.root)
// console.log(Bst.search(10))
// Bst.preorder(Bst.root);
// Bst.levelorder(Bst.root)
// console.log(Bst.minroot(Bst.root))


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(15);
tree.insert(9);
tree.insert(8);
tree.insert(7);
// tree.root.right.value = 2;
tree.levelorder(tree.root)

// console.log(tree.root)
// tree.levelorder(tree.root);
// tree.inorder(tree.root)
console.log(tree.isBst())