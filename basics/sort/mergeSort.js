const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = (arr.length / 2) | 0;
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < mid; ++i) {
    leftArr[i] = arr[i];
  }
  for (let i = mid; i < arr.length; ++i) {
    rightArr[i - mid] = arr[i];
  }
  const sortedLeft = mergeSort(leftArr)
  const sortedRight = mergeSort(rightArr)
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result[result.length] = left[leftIndex];
        leftIndex++;
      } else {
        result[result.length] = right[rightIndex];
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      result[result.length] = left[leftIndex];
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      result[result.length] = right[rightIndex];
      rightIndex++;
    }

    return result;
};

const array = [-2, 3, 4, -1, 23, 90, 76];
console.log("array: ", mergeSort(array));
