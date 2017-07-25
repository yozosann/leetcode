var searchInsert = function (nums, target) {
  var left = 0, right = nums.length - 1;
  if (target <= nums[left]) { return left; }
  else if (target > nums[right]) { return right + 1; }
  else if (target == nums[right]) { return right; }
  var middle = parseInt((left + right) / 2);
  while (left !== right) {
    if (target === nums[middle])
    { return middle; } else if (target > nums[middle]) { left = middle; middle = parseInt((left + right) / 2); } else { right = middle; middle = parseInt((left + right) / 2); }
  } return middle;
};

console.log(searchInsert([1, 3, 5, 6], 4));