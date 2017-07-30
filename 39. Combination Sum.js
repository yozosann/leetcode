let combinationSum = function (candidates, target) {
  let result = [];
  for (let val of candidates) {
    if (val > target) continue;
    if (target == val) {
      result.push([val]);
      continue;
    }
    concat(combinationSum(candidates, val), combinationSum(candidates, target - val), result);
  }
  if (result.length) {
    return result;
  } else {
    return false;
  }
};

console.log(combinationSum([2, 3, 4, 7], 7));

function concat(arr1, arr2, result) {
  arr1 && arr1.forEach(val1 => {
    arr2 && arr2.forEach(val2 => {
      val1 && val2 && result.push(val1.concat(val2));
    })
  })
}