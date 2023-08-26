const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const array = [-12, -5, 5632, 435, 3, -3];
console.log("array: ", quickSort(array));
