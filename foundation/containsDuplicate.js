const containsDuplicate = function (nums) {
	const uniqueArray = new Set(nums)
	return nums.length === uniqueArray.size ? false : true
};

console.log(containsDuplicate([1,51,111,3]));

// var containsDuplicate = function(nums) {
//     const s = new Set(nums); return s.size !== nums.length
// };