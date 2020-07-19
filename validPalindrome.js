/*
input: a string
output: boolean
rules:
- returns true if string is a palindrome
- a palindrome is a string that reads same back and forward
- case insensitive
- only consider alphanumeric chars
- an empty string would return true

examples:
validPalindrome("A man, a plan, a canal: Panama") => true
validPalindrome("race a car") => false
validPalindrome("") => true

data structure:
- string

algorithm:
- downcase the string
- set leftPointer to 0
- set rightPointer to length of string - 1
- while leftPointer <= rightPointer
  - set char1 to str[leftPointer]
  - set char2 to str[rightPointer]
  - while char1 < 'a' OR char1 > 'z', increment leftPointer by 1
  - while char2 < 'a' OR char2 > 'a', decrement rightPointer by 1
  - if char1 === char2:
    - increment leftPointer by 1
    - decrement rightPointer by 1
  - else:
    - return false
- return true
*/

function validPalindrome(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;

  str = str.toLowerCase();
  while (leftPointer <= rightPointer) {
    while (str[leftPointer] < 'a' || str[leftPointer] > 'z') {
      leftPointer += 1;
    }
    while (str[rightPointer] < 'a' || str[rightPointer] > 'z') {
      rightPointer -= 1;
    }

    if (str[leftPointer] === str[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome(""));
