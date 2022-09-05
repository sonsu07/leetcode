/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    let original = x.toString().split('').join('')
    let result = x.toString().split('').reverse().join('');
    return Number(result) === Number(original);
}