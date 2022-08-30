/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function(nums) {
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            set.add(i+1);
        }
        for (const num of nums) {
            set.delete(num);
        }
        return [...set];
    };