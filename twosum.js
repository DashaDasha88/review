const twoSum = function(nums, target) {

  let pairs = {};
    
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (pairs[complement] !== undefined && pairs[complement] !== i) {
          return [pairs[complement], i];
      }
      pairs[nums[i]] = i;
  }

}

console.log(twoSum([3, 2, 4], 6));