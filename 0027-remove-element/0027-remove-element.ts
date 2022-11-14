function removeElement(nums: number[], val: number): number {
    let resultMap = new Map();
    resultMap.set(val,1)
    for (let i = 0; i < nums.length; i++) {
        if (resultMap.has(nums[i])) {
            nums.splice(i,1);
            i = i -1;
        }
    }
    return nums.length;
}