/**
 * @param {number[][]} accounts
 * @return {number}
 */
let maximumWealth = function(accounts) {
    let sumArr = [];
    let sum = 0;
    accounts.forEach(item => {
        item.forEach(item => {
            sum += item;
        })
        sumArr.push(sum);
        sum = 0;
    })
    return Math.max(...sumArr);
};