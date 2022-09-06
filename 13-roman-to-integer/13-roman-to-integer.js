let romanToInt = (s) =>  {
   function transLiteral(data) {
      if (data === 'I') return 1;
      else if (data === 'V') return 5;
      else if (data === 'X') return 10;
      else if (data === 'L') return 50;
      else if (data === 'C') return 100;
      else if (data === 'D') return 500;
      else if (data === 'M') return 1000;
   }

   const splitS = s.split('');
   let valueArr = [];
   splitS.forEach((data) => {
      valueArr.push(transLiteral(data));
   })

   let result = 0;
   for (let i = 0; i < valueArr.length; i++) {
      let firstNum = valueArr[i];
      let secondNum = valueArr[i+1];

      if (firstNum < secondNum) {
         result += (secondNum - firstNum);
         i++;
      }
      else result += firstNum;
   }

   return result;
};