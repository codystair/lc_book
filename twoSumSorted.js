/*
input: array of integers sorted ascended and target integer
output: indices of elements that sum to target
rules:
- indices not zero-based
- may assume exactly one solution

example(s):
twoSumSorted([4, 5, 5, 6, 9], 15) => [4, 5]

data structure:
- array

algorithm:
- set leftPointer to 0
- set rightPointer to length of nums - 1
- while true:
  - set sum to nums[leftPointer] + nums[rightPointer]
  - if sum < target, increment leftPointer by 1
  - if sum > target, decrement rightPointer by 1
  - else return [leftPointer + 1, rightPointer + 1]
*/

function twoSumSorted(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (true) {
    let sum = nums[leftPointer] + nums[rightPointer]

    if (sum < target) {
      leftPointer += 1;
    } else if (sum > target) {
      rightPointer -= 1;
    } else {
      return [leftPointer + 1, rightPointer + 1];
    }
  }
}

console.log(twoSumSorted([4, 5, 5, 6, 9], 15));
