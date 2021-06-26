function binarySearch(arr, item){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length -1;
  
  while (left <= right){
      let m = Math.floor((right + left) / 2);
      console.log(left,m,right)
      if (arr[m] === item) return m;
    
      if (item < arr[m]){
          right = m -1;
      }
      else {
          left = m + 1;
      }
  }
  return -1;
}

let result = binarySearch([2,5,6,9,13,15,28], 15);
console.log(result);