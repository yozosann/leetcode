/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    let records = [];
    const cache = {};
    const tempCache = {};

    const pushResult = function(arr) {
        const res = arr.sort((a, b) => a - b);
        const key = res.join('-');
        
        if(!cache[key]) {
            cache[key] = true;
            result.push(arr);
        }
    }

    const pushRecord = function(arr) {
        const res = arr.sort((a, b) => a - b);
        const key = res.join('-');
        
        if(!tempCache[key]) {
            tempCache[key] = true;
            records.push(arr);
        }
    }

    for(let i = 0; i < candidates.length; i ++) {
        const current = candidates[i];
        if(candidates[i] > target) continue;
        if(candidates[i] === target) {
            pushResult([target]);
            continue;
        }

        const temp = [];
        for(let j = 0; j < records.length; j++) {
            if(current === 5) console.error(records);
            const record = records[j];
            if((sum(record) + current) < target) temp.push([...record, current]);
            if((sum(record) + current) === target) pushResult([...record, current]);
        }

        temp.forEach(i => pushRecord(i));
        pushRecord([current]);
    }

    return result;
};

var sum = function(arr) {
    let res = 0
    for(let i = 0; i < arr.length; i ++) {
        res += arr[i];
    }
    return res;
}

console.log(combinationSum2([10,1,2,7,6,1,5],8));
// console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],27));