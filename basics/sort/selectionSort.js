const selectinSort = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) return arr;
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i; 
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const call = selectinSort([40, 20, 70, 10, 30]);
console.log(call);
