/**
 * @param {number} n
 * @return {boolean}
 */
let isUgly = function(n) {
    if (n === 0) return false;
    let numArr = [2, 3, 5];
    
    for (let i of numArr) {
        while (n%i === 0) {
            n /= i;
        }
    }
    return n === 1;
};