// Similar to a doubly linked list, but with two pointers, one more to the previous node

// Node class
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let new_node = new Node(val);

        if (this.length === 0){
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.prev = this.tail;
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.length++;
        return this;
    }

    pop(){
        if (this.length === 0) return undefined;

        let pop_node = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev
            this.tail.next = null;
        }
        this.length--;
        pop_node.prev = null;

        return pop_node;
    }

    shift(){
        if (this.length === 0) return undefined;

        let shiftedNode = this.head;
        this.head = shiftedNode.next
        if (this.length === 1){
            this.tail = null;
        }
        else {
            this.head.prev = null;
        }
        shiftedNode.next = null
        this.length--;

        return shiftedNode;
    }

    unshift(val){
        let new_node = new Node(val);

        if (this.length === 0){
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.head.prev = new_node;
            new_node.next = this.head;
            this.head = new_node
        }
        this.length++;

        return this;
    }

    get(index){
        if (index < 0 || index >= this.length || typeof index != "number") return undefined;
        
        let count = 0;
        let node = this.head;
        if (index <= this.length / 2){
            while(count < index){
                node = node.next;
                count++;
            }
        }
        else {
            count = this.length - 1;
            node = this.tail;
            while(count > index){
                node = node.prev;
                count--;
            }
        }

        return node;
    }

    set(index, val){
        let node = this.get(index);
        console.log(node)
        if(!node) return false;

        node.val = val;
        return true;
    }

    insert(index, val){
        if (index < 0 ||
            index > this.length ||
            typeof index != "number"){
                return false
        }

        if (index === this.length){
            this.push(val);
        }
        else if (index === 0){
            this.unshift(val);
        }
        else {
            let newNode = new Node(val);
            let node = this.get(index - 1);

            newNode.next = node.next;
            newNode.prev = node;
            node.next.prev = newNode;
            node.next = newNode;
            this.length++;
        }

        return true;
    }

    remove(index){
        if (index < 0 ||
            index >= this.length ||
            typeof index != "number"){
                return false
        }
        
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let node = this.get(index);
        node.next.prev = node.prev;
        node.prev.next = node.next;

        node.prev = null;
        node.next = null;
        this.length--;

        return node;
    }
}

// *************** Testing ***************

dll = new DoublyLinkedList()

dll.push("one")
dll.push("two")
dll.push("three")
dll.push("four")

console.log(dll.insert(2, 2.5))

console.log(dll.get(1).val)
console.log(dll.get(2).val)
console.log(dll.get(3).val)
console.log(dll.get(4).val)

console.log("*************+")

console.log(dll.remove(2))

console.log(dll.get(1).val)
console.log(dll.get(2).val)
console.log(dll.get(3).val)