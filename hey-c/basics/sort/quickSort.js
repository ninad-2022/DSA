function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [6, 8, -1, 9, 1, -5, 7];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); 
