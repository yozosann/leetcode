/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    const stack = [];
    for(let i = 0; i < height.length; i++) {
        // console.error(i, stack);
        let stackTop = stack.pop();
        const current = height[i];
        if(!stackTop || stackTop[0] >= current) {
            stackTop && stack.push(stackTop);
        } else {
            let min = stackTop[0];
            // console.error(9999, stack); 
            while(stackTop[0] < current) {
                stackTop = stack.pop();
                if(!stackTop) break;
                if(stackTop[0] > min) {
                    res += (Math.min(current, stackTop[0]) - min) * (i - stackTop[1] - 1);
                    // console.error(i, 'current', current, stackTop, 'res:', res);
                    min = stackTop[0];
                }
            }
            // 放回去
            stack.push(stackTop);
        }
        stack.push([current, i]);
    }

    return res;
};

// console.error(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.error(trap([0,2,0,4]));
console.error(trap([4,2,0,3,2,5]));