/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function(nums) {
    let arrLen = nums.length;
    let newArr = [];
    let sum = nums[0];

    nums.forEach((item, idx) => {
        newArr.push(sum);
        sum += nums[idx+1];
        // if (idx === arrLen) {}
    })
    return newArr;
};