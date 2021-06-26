/***********
*    Insertion - O(log n) * maybe could be O(n)
*    Searching - 0(log n) * maybe
************/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        if (!this.root){
            this.root = newNode;
        }

        let currentNode = this.root
        while (true){
            if (newNode.value > currentNode.value) {
                if (!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;                    
            } else if (newNode.value < currentNode.value){
                if (!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;                    
            } else {
                return this;
            }
        }  
    }

    find(value){
        if (!this.root) return false;

        let currentNode = this.root;
        while (currentNode){
            if (value === currentNode.value) return true;

            if(value > currentNode.value){
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
        return false;
    }

    // traversal
    DFS(){
        let data = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        if (this.root) traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree()

console.log(tree.find(325))

tree.insert(5);
tree.insert(12)
tree.insert(2)
tree.insert(34)
tree.insert(4)
tree.insert(4)

console.log(tree.find(5))
console.log(tree.find(12))
console.log(tree.find(2))
console.log(tree.find(34))
console.log(tree.find(4))
console.log(tree.find(36))
console.log(tree.find(0))
console.log(tree.find(110))


console.log(tree.DFS())
console.log(tree)

