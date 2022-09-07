/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) { // 첫번째 원소 조각내기, f, l, o, w, e, r
        for (let item of strs) { // strs 각 원소, flower, flow, flight
            if (item[i] !== strs[0][i]) {
                return item.slice(0, i);
            }
        }
    }
    return strs[0];
};