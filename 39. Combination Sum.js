let combinationSum = function (candidates, target) {
  let result = [];
  let duplicate = [];
  for (let val of candidates) {
    if (val > target) continue;
    if (target == val) {
      result.push([val]);
      continue;
    }
    duplicate.push(target - val);
    concat(combinationSum(candidates, val), combinationSum(candidates, target - val), result);
  }
  if (result.length) {
    return result;
  } else {
    return false;
  }
};

for (let val of combinationSum([2, 3, 4, 7], 7)) {
  console.log(val);
}

function concat(arr1, arr2, result) {
  arr1 && arr1.forEach(val1 => {
    arr2 && arr2.forEach(val2 => {
      var resArr = val1.concat(val2);
      if (noDuplicate(result, resArr)) {
        result.push(resArr);
      }
    })
  })
}

function noDuplicate(result, target) {
  if (!result.length) return true;
  let isDuplicate = false;
  for (let val of result) {
    if (val.length == target.length) {
      isDuplicate = compare(sumUp(val), sumUp(target));
      if (isDuplicate) break;
    } else {
      continue;
    }
  };
  return !isDuplicate;
}

function sumUp(arr) {
  let obj = {};
  if (!arr.length) return obj;
  for (let val of arr) {
    if (obj[val]) {
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  };
  return obj;
}

function compare(obj1, obj2) {
  for (let i in obj1) {
    if (obj1[i] == obj2[i]) continue;
    else return false;
  }
  return true;
}
