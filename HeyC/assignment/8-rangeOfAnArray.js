class SolutionRange {  
    static rangeOfAnArray(arr) {
      if (arr.length === 0) {
        return 0;
      }
      let min = arr[0];
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current < min) {
          min = current;
        } else if (current > max) {
          max = current;
        }
      }
      return max - min;
    }
  }
  
  const arr1 = [3, 2, 10, 4, 7, 8];
  const rangeFinder1 = SolutionRange.rangeOfAnArray(arr1);
  console.log(rangeFinder1);
  
  const arr2 = [30, 15, 6, 10, 12, 22];
  const rangeFinder2 = SolutionRange.rangeOfAnArray(arr2);
  console.log(rangeFinder2);
  
