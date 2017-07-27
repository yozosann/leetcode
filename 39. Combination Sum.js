let combinationSum = function (candidates, target) {
  let results = [];
  let newCandidates = candidates.filter((val) => {
    if (val === target) {
      results.push([val]);
    }
    return val < target;
  });
  console.log(newCandidates);
  return results;
};

console.log(combinationSum([2, 3, 4, 7], 7));