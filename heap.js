class Heap {
    constructor() {
        this.arr = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChild(i) {
        return i * 2 + 1;
    }

    getRightChild(i) {
        return i * 2 + 2;
    }

    insert(value) {
        this.arr.push(value);
        this.heapifyUp();
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    heapifyUp() {
        let index = this.arr.length - 1;
        while (index > 0 && this.arr[index] > this.arr[this.getParent(index)]) {
            this.swap(index, this.getParent(index));
            index = this.getParent(index);
        }
    }

    removeRoot() {
        if (this.arr.length === 0) {
            return null;
        }
        const root = this.arr[0];
        const last = this.arr.pop();
        if (this.arr.length > 0) {
            this.arr[0] = last;
            this.heapifyDown(0);
        }
        return root;
    }

    heapifyDown(index) {
        const left = this.getLeftChild(index);
        const right = this.getRightChild(index);
        let largest = index;
        if (left < this.arr.length && this.arr[left] > this.arr[largest]) {
            largest = left;
        }
        if (right < this.arr.length && this.arr[right] > this.arr[largest]) {
            largest = right;
        }
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    buildHeap() {
        const length = this.arr.length;
        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    heapSort() {
        this.buildHeap();
        for (let i = this.arr.length - 1; i >= 0; i--) {
            this.swap(0, i);
            this.heapifyDown(0, i);
        }
    }
}

const heap = new Heap();
heap.insert(200);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(60);
heap.insert(70);
// heap.heapSort();
// heap.removeRoot();

console.log(heap.arr);
