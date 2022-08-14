/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function(nums) {
    // 세번쨰로 큰 수를 출력
    // 세번째로 큰 수가 없다면 가장 큰 수를 출력

    let deDupNums = [...new Set(nums)];                 // 중복 제거
    let getNumsLen = deDupNums.length;                  // 길이
    let deDupNumsSort = deDupNums.sort((a,b) => a-b);   // 정렬
    let thirdMaxNumOrMore = [];
    for (let deDupNum in deDupNumsSort ) {
        if (getNumsLen >= 3) {
            for (let i = 0; i < 3; i++) {
                thirdMaxNumOrMore.push(deDupNumsSort.pop());
            }
            return thirdMaxNumOrMore[2];
        }
        if (getNumsLen < 3) {
            return Math.max(...deDupNumsSort);
        }
    }
};