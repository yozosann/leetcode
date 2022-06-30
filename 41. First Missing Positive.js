/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > -1) arr[nums[i]] = 1;
    }

    let res;
    for(let i = 1; i < arr.length; i++) {
        if(!arr[i]) {
            res = i;
            break;
        }
    }

    if(!res) res = arr.length;
    if(!res) res = 1;
    return res;
};

console.log(firstMissingPositive([7,8,9,11,12]));
console.log(firstMissingPositive([-1]));