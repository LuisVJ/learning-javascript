function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let merged = [];
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[i+j] = arr1[i];
            i++;
        }
        else {
            merged[i+j] = arr2[j];
            j++;
        }
    }
    while(i < arr1.length) {
        merged[i+j] = arr1[i];
        i++;
    }
    while(j < arr2.length) {
        merged[i+j] = arr2[j];
        j++;
    }
    return merged;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    console.log(arr);
    let middle = Math.floor(arr.length / 2)
    let a = mergeSort(arr.slice(0, middle));
    let b = mergeSort(arr.slice(middle));
    return merge(a, b);
}

A = [3, 4 ,6 ,23, 45, 76];
B = [1, 3, 5, 34, 43, 67, 89];


C = [3, 1 ,6 ,8 ,5 ,3, 29, 12, 453, 55 ,21 ,67 ,4 ,23 ,9  ,234 ,43];

console.log(mergeSort(C));