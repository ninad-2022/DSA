const maxProductDifference = (nums) => {
  nums.sort();
  let minNum = nums[0] * nums[1];
  let maxNum = nums[nums.length - 1] * nums[nums.length - 2];
  
  return maxNum - minNum;
};

console.log(maxProductDifference([1,6,7,5,2,4,10,6,4]));

// Regular maximum finding procedure, but modified to accept
// optional `except` parameter, so it makes it possible to
// find many greatest values. `except` defaults to -1 which does not
// appear among array indexes, so it is possible to ignore this parameter.
var findMax = (array, { except = -1 } = {}) => {
  let max = null;
  // we also need to store this value, to skip this index later
  let maxIndex = null;

  for (let i = 0; i < array.length; i++) {
    if (i === except) continue; // skip `except` index

    if (max === null || max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }

  // return both maximum and its index as the output
  return { value: max, index: maxIndex };
};

var findMin = (array, { except = -1 } = {}) => {
  let min = null;
  let minIndex = null;
  for (let i = 0; i < array.length; i++) {
    if (i === except) continue;

    if (min === null || min > array[i]) {
      min = array[i];
      minIndex = i;
    }
  }
  return { value: min, index: minIndex };
};

var maxProductDifference2 = function (nums) {
  let { value: firstMax, index: firstMaxIndex } = findMax(nums);
  // When searching for the second greatest value, we pass the index
  // of the first greatest value to skip it. We can't use the maximum
  // value itself, because it may appear more than once in the array.
  let { value: secondMax } = findMax(nums, { except: firstMaxIndex });

  let { value: firstMin, index: firstMinIndex } = findMin(nums);
  let { value: secondMin } = findMin(nums, { except: firstMinIndex });

  return firstMax * secondMax - firstMin * secondMin;
};
