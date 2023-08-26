const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped=true
      }
    }
  } while (swapped);
  return arr
};

const arr = [1, 43, 23, 12,18];
console.log(bubbleSort(arr)); //O(n^2)
