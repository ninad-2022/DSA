const findDisappearedNumbers = (nums) => {
	const n = nums.length;

	for (let i = 0; i < n; i++) {
		const index = (nums[i] - 1) % n;
		nums[index] += n;
	}

	const result = [];
	let resultIndex = 0;

	for (let i = 0; i < n; i++) {
		if (nums[i] <= n) {
			result[resultIndex++] = i + 1;
		}
	}
	return result;

}
const result = findDisappearedNumbers([1, 2, 3, 4, 6, 7, 8, 9, 3])
console.log('result: ', result);