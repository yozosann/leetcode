var searchInsert = function (nums, target) {
  var left = 0, right = nums.length - 1;
  var middle = parseInt((left + right) / 2);
  if (target > nums[right]) {
    return right + 1;
  } else if (target == nums[right]) {
    return right;
  } else if (target <= nums[left]) {
    return left;
  } else if (nums.length == 2){
    return left + 1;
  }
  
  while (left !== middle) {
    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle; 
      resultIndex = middle + 1;
      middle = parseInt((left + right) / 2);
    } else {
      right = middle; 
      resultIndex = middle;
      middle = parseInt((left + right) / 2);
    }
  } return resultIndex;
};

console.log(searchInsert([1, 3], 2));