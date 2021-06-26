function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;           
        }
    }
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1;
        while(j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
}

let a = [3, 2, 53, 235, 62, 123, 23, 43, 89, 3, 36, 64];
insertionSort(a);
console.log(a);