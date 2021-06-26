function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

/*
function radixSort(arr) {
    let n = mostDigits(arr);

    for (let i = 0; i < n; i++) {
        let sortArr = []
        for (let j = 0; j < 10; j++) {
            let bucket = []
            sortArr.push(bucket);
        }
        for(let k = 0; k < arr.length; k++){
            let d = getDigit(arr[k], i)
            sortArr[d].push(arr[k]);
        }
        console.log(sortArr);
        for (let l = 0; l < arr.length; l++) {

        }
    }
    
}*/

function radixSort(arr) {
    let maxDigitcount = mostDigits(arr);

    for (let i = 0; i < maxDigitcount; i++) {
        let digitBuckets = Array.from({length:10}, () => []);
        for(let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        
        arr = [].concat(...digitBuckets);
    }
    return arr
}




let A = [12, 235, 6436,7346, 34021, 1335, 3025606, 23980, 12, 42365, 123];

radixSort(A)