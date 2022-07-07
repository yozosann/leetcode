/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = [];

    function pushRes(value, offset) {
        const current = `${value}`.split('');
        for(i = 0; i < offset; i++) current.push('0');
        const a = current.length > res.length ? current : res;
        const b =  current.length > res.length ? res : current;
        const newRes = [];
        let flag = 0;
        for(let i = a.length - 1; i >= 0; i--) {
            const v = +a[i] + (+(b[i] || 0)) + flag;
            console.error(current, res, v);
            if(v > 10) {
                newRes[i] = `${v % 10}`;
                flag = 1;
            } else {
                newRes[i] = `${v}`;
                flag = 0;
            }
        }

        console.error('----', newRes);
        res = newRes;
    }

    for(let i = num1.length - 1; i >= 0; i--) {
        for(let j = num2.length - 1; j >= 0; j--) {
            // const r = num1[i] * num2[j] * Math.pow(10, num2.length - 1 - j) * Math.pow(10, num1.length - 1 - i);
            // console.error(num1[i], num2[j], Math.pow(10, num2.length - 1 - j), Math.pow(10, num1.length - 1 - i));
            pushRes(num1[i] * num2[j], (num2.length - 1 - j) + (num1.length - 1 - i));
            // res = res + r;
        }
    }
    return res.join('');
};

console.error(multiply("123", "456"));
// console.error(multiply("9", "99"));