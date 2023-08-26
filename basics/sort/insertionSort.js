const insertionSort = (arr) => {
  const length = arr.length;
  if (!Array.isArray(arr) || length <= 1) return arr;
  for (let i = 0; i < length; ++i) {
    let elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
};

const array = [-6, 20, 8, -2, 4];
console.log(insertionSort(array)); //O(n^2)
