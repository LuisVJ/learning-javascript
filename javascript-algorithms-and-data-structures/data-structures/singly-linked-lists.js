// A linked list is a data structure that contains a head, tail and length property
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null


// Node class
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){ // Asigns a new node to the list at the end
        let node = new Node(val);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){ // Removes the last item in the list
        if (!this.head){
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){ // returns a new node at the head of the list
        if(!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val){ // Adds the node at the head of the list
        let node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(pos){
        if (pos < 0 || pos >= this.length) return undefined;

        let count = 0;
        let current = this.head;
        while(count < pos){
            count++;
            current = current.next;
        }
        return current;
    }

    set(pos, value){
        let node = this.get(pos);
        if (!node) return false;
        
        node.val = value;
        return true;
    }

    insert(pos, val){
        if(pos < 0 || pos > this.length) return false;

        if (pos === this.length){
            this.push(val);
        }
        else if (pos === 0){
            this.unshift(val);
        }
        else{
            let newNode = new Node(val);
            let node = this.get(pos-1);
            newNode.next = node.next;
            node.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(pos){
        if(pos < 0 || pos > this.length) return undefined;

        if(pos === 0) return this.shift();
        if(pos === this.length - 1) return this.pop();

        let prevNode = this.get(pos - 1);
        let node = prevNode.next;
        prevNode.next = node.next;
        this.length--;
        return node;
    }

    reverse(){
        let current = this.head;
        this.tail = this.head;
        let prev = null;
        let next;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        
    }

    // Debug
    print(){
        let t = list.head;
        while (t !== null){
            console.log(t.val);
            t = t.next;
    }
}
}




// testing*******************
let list = new SinglyLinkedList()
list.push("hello")
list.push("there")
list.push("!")
list.push("How")
list.push("are")
list.push("you")

let a = list.head;
while (a !== null){
    console.log(a.val);
    a = a.next;
}
console.log(list.length)
console.log(list)
// pop
console.log(list.shift())
console.log(list.unshift("Hello"))
a = list.head;
while (a !== null){
    console.log(a.val);
    a = a.next;
}
console.log(list.length)

list.print()
list.reverse()
console.log(list)

list.print()