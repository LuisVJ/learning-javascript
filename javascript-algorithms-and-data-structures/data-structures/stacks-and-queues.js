// ***** STACKS *****

// In a stack, the last element added to the stack will be the first element removed from the stack -> LIFO data structure

// Uses: Undo/Redo; Managing function invocations; Routing (history object)

// we can implement it with an array ad using either push and pop, or shift and unshift
// push and pop would be more efficient in this case

// ** Linked list implementation **

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value)
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if (!this.first) return null;

        let popNode = this.first;
        this.first = popNode.next;
        if (this.first === this.last){
            this.last = null;
        }
        this.size--;
        return popNode.value;
    }
}

// Big O of stacks:
    // insertion - O(1)
    // Removal - O(1)
    // Searching - O(N)
    // Access - O(N)

let stack = new Stack();

// ***** QUEUES *****

// In a queue, the last item added will be the last one removed ->STACKS FIFO data structure

// Uses: Background tasks, uploading resources, printing...

// It can also be easily implemented with an array:
// push and shift; or unshift and pop 

// ** Linked list implementation **

// class Node(){
    // In this case we will reuse the node class already defined
// }

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;

        return this.size;
    }

    dequeue(){
        if(!this.first) return null;

        let deqNode = this.first;
        this.first = deqNode.next;
        if(this.first === this.last){
            this.last = null;
        }
        this.size--;

        return deqNode.value;
    }
}

let que = new Queue();

que.enqueue(1);
que.enqueue(2);
que.enqueue(3);

console.log(que);

que.dequeue();
console.log(que)
que.dequeue();
que.dequeue();

console.log(que)


// Big O of queues:
    // insertion - O(1)
    // Removal - O(1)
    // Searching - O(N)
    // Access - O(N)
