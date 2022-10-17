/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
   // 3으로 나뉘어지면 Fizz
   // 5로 나뉘어지면 Buzz
   // 3과 5로 나뉘어지면 FizzBuzz

   let arr = [];
   for (let i = 1; i <= n; i++) {
      i = i.toString();
      arr.push(i);
      if (i%3 === 0 && i%5 !== 0) {
         arr.pop();
         arr.push('Fizz')
      } else if (i%3 !== 0 && i%5 === 0) {
         arr.pop();
         arr.push('Buzz')
      } else if (i%3 === 0 && i%5 === 0) {
         arr.pop();
         arr.push('FizzBuzz')
      }
   }
   return arr;
};