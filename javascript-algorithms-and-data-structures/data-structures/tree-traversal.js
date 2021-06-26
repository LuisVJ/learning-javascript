// Breath first search

function BFS(){
    let data = [];
    let  queue =[];
    let node = this.root;

    queue.push(this.root);
    while(queue.length){
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return data;
}

// Depth first search PreOrder

function DFS(tree){
    let data = [];
    function traverse(node){
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    if (tree.root) traverse(tree.root);
    return data;
}

// Depth first search PostOrder

function DFS(tree){
    let data = [];
    function traverse(node){
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
    }
    if (tree.root) traverse(tree.root);
    return data;
}

// Depth First InOrder

function DFS(tree){
    let data = [];
    function traverse(node){
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
    }
    if (tree.root) traverse(tree.root);
    return data;
}