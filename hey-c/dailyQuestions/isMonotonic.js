const isMonotonic = (nums) => {
  let isDecreasing = false;
  let isIncreasing = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = true;
    } else if (nums[i] < nums[i - 1]) {
      isIncreasing = true;
    }
    if (isDecreasing && isIncreasing) {
      return false;
    }
  }
  return true;
};

const a = isMonotonic([1, 2, 2, 3]);
console.log("a: ", a);
