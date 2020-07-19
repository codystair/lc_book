class TwoSumDS {
  constructor() {
    this.nums = {};
  }

  add(input) {
    if (this.nums[input]) {
      this.nums[input] += 1;
    } else {
      this.nums[input] = 1;
    }
  }

  find(value) {
    const keys = Object.keys(this.nums);
    
    for (let i = 0; i < keys.length; i++) {
      let num = keys[i];
      let diff = value - num;
      
      if (diff == num) {
        if (this.nums[num] >= 2) return true;
      } else if (this.nums[diff]) {
        return true;
      }
    }

    return false;
  }
}

let twoSum = new TwoSumDS();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
console.log(twoSum.find(4));
console.log(twoSum.find(7));
