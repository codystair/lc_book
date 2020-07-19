/*
input: array of integers and target number
output: return indices of two numbers in array that add to target number
rules:
- there will be exactly one solution
- returned indices are NOT zero-based
- index1 will be less than index2

example(s):
twoSum([4, 5, 7, 6, 9], 14) => [2, 5]

data structure:
- array

algorithm:
- iterate over indicies of array (i):
  - iterate over indicies of array (j) after i:
    - if array[i] + array[j] === target, return [i + 1, j + 1]
*/

// Brute Force => O(N^2) runtime, O(1) space
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j ++) {
//       if (nums[i] + nums[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// }

// Hash Table => O(n) runtime, O(n) space
function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    
    if (map[target - x]) {
      return [map[target - x] + 1, i + 1];
    } else {
      map[x] = i;
    }
  }
}

console.log(twoSum([4, 5, 7, 6, 9], 14));
