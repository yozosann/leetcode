/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = [];
    // let res2 = 0;

    function pushRes(value, offset) {
        const current = `${value}`.split('');
        for(i = 0; i < offset; i++) current.push('0');
        const length = current.length - res.length;
        if(length > 0) for(i = 0; i < length; i++) res.unshift('0');
        if(length < 0) for(i = 0; i < Math.abs(length); i++) current.unshift('0');

        // console.error(current, res);
        let flag = 0;
        for(let i = current.length - 1; i >= 0; i--) {
            const v = +current[i] + (+res[i]) + flag;
            // console.error(current, res, v);
            if(v >= 10) {
                res[i] = `${v % 10}`;
                flag = 1;
            } else {
                res[i] = `${v}`;
                flag = 0;
            }
        }

        if(flag) res.unshift('1');

        // console.error('----', res);
    }

    for(let i = num1.length - 1; i >= 0; i--) {
        for(let j = num2.length - 1; j >= 0; j--) {
            // const r = num1[i] * num2[j] * Math.pow(10, num2.length - 1 - j) * Math.pow(10, num1.length - 1 - i);
            // console.error('----', r, res2);
            // console.error(num1[i], num2[j], Math.pow(10, num2.length - 1 - j), Math.pow(10, num1.length - 1 - i));
            pushRes(num1[i] * num2[j], (num2.length - 1 - j) + (num1.length - 1 - i));
            // res2 = res2 + r;
        }
    }

    // 去0
    for(let i = 0; i < res.length - 1; i++) {
        if(+res[i] === 0) res[i] = -1;
        else break;
    } 

    // console.error('res2', res2);
    return res.filter(i => i > -1).join('');
};

// console.error(multiply("123", "456"));
// console.error(multiply("9", "99"));
console.error(multiply("408", "5"));