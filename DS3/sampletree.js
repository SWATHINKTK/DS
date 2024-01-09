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

    insert(value){
        const newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertHelper(this.root,newNode)
        }
    }

    insertHelper(root,newNode){
        if(root.value > newNode.value){
            if(!root.left){
                root.left = newNode;
            }else{
                this.insertHelper(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                this.insertHelper(root.right,newNode);
            }
        }
    }

    levelOrder(root){
        const queue = [root];
        while(queue.length > 0){
            const node = queue.shift();
            console.log(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }

    deleteNode(root,value){
        if(!root){
            return root;
        }

        if(root.value > value){
            root.left = this.deleteNode(root.left,value);
        }else if(root.value < value){
            root.right = this.deleteNode(root.right,value);
        }else{
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value)
        }
        return root;
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left);
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
tree.levelOrder(tree.root)

var rangeSumBST = function(root, low, high) {
    if (root === null) {
        return 0;
    }

    if (low <= root.value && root.value <= high) {
        return root.value + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    } else if (root.value < low) {
        return rangeSumBST(root.right, low, high);
    } else {
        return rangeSumBST(root.left, low, high);
    }
};

console.log('Sum',rangeSumBST(tree.root,8,15))