
class Solution {
  static findCurrency(votes) {
    const N = votes.length;
    const denominations = [];

    for (let i = 0; i < N; i++) {
      const idx = Math.abs(votes[i]) - 1;
      if (votes[idx] > 0) {
        votes[idx] = -votes[idx];
      } else {
        denominations[denominations.length] = idx + 1;
      }
    }

    return denominations;
  }
}
const vote = [3, 4, 3, 1];
let exampleOne = Solution.findCurrency([3, 4, 3, 1]);
let exampleTwo = Solution.findCurrency([4, 3, 2, 1, 2, 1]);
console.log("exampleOne: ", exampleOne);
console.log('exampleTwo: ', exampleTwo);
