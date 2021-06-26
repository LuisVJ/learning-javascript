
function pivot(arr, start = 0, end = arr.length-1){
    let index = start;
    
    for (let i = start+1; i <= end; i++) {
        if (arr[i] < arr[start]){
            index++;
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    
    let temp = arr[index];
    arr[index] = arr[start];
    arr[start] = temp;

    return index;    
}

function quickSort(arr, start = 0, end = arr.length -1) {
    if (start < end){
        let p = pivot(arr, start, end);

        quickSort(arr, start, p-1);
        quickSort(arr, p+1, end)
    }

    return arr;
}


A = [77,3, 1 , 6, 34, 980 , 23 , 5,99, 78,  46, 95 , 23, 53];


quickSort(A)
console.log(A);

