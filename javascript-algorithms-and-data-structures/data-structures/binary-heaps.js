// Big O
// Insertion -> Log(N)
// Removal -> Log(N)


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();      
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;            
        }
    }

    // My implementation. Needs refactor of out of bounds check and edge case
    extractMax() {
        let max = this.values[0];
        // edge case, last item
        this.values[0] = this.values.pop();
        let index = 0;
        while(true) {
            let leftIdx = 2 * index + 1;
            if (!this.values[leftIdx]) leftIdx = index;
            let rightIdx = 2 * index + 2;
            if (!this.values[rightIdx]) rightIdx = index;

            if (
                this.values[leftIdx] > this.values[index] ||
                this.values[rightIdx] > this.values[index]
            ) {
                if (this.values[leftIdx] > this.values[rightIdx]) {
                    // Swap left
                    let s = this.values[index];
                    this.values[index] = this.values[leftIdx];
                    this.values[leftIdx] = s;
                    index = leftIdx;
                } else {
                    // Swap right
                    let s = this.values[index];
                    this.values[index] = this.values[rightIdx];
                    this.values[rightIdx] = s;
                    index = rightIdx;                   
                }
            } else {
                break;
            }
        }
        return max;
    }

    // Colt's implementation of extract
    extractMaxColt() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
          this.values[0] = end
          this.sinkDown()
        }
        return max
      }
      sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
          let leftChildIdx = 2 * idx + 1
          let rightChildIdx = 2 * idx + 2
          let leftChild, rightChild
          let swap = null
     
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
              swap = leftChildIdx
            }
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if (
              swap === null && rightChild > element ||
              swap !== null && rightChild > leftChild
            ) {
              swap = rightChildIdx
            }
          }
     
          if (swap === null) break;
          this.values[idx] = this.values[swap]
          this.values[swap] = element
          idx = swap
        }
      }

}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(100);
heap.insert(3);

console.log(heap)
heap.extractMax()
heap.extractMax()
console.log(heap)