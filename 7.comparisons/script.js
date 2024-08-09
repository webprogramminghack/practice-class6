'use strict';

{
  const result = 5 == '5'; // true
}

{
  const result = 5 != '5';
  // console.log('result :>> ', result);
}

{
  const result = 5 !== '5';
  // console.log('result :>> ', result);
}

{
  // const result = 10 > 5;
  const result = 10 < 5;
  // console.log('result :>> ', result);
}

{
  // const result = 10 > 5;
  const result = 10 >= 10;
  console.log('result :>> ', result);
}

{
  const result1 = 'apple' > 'banana';
  console.log('result1 :>> ', result1);
}

{
  const result1 = null > 0;
  console.log('result1 :>> ', result1);

  const result2 = null >= 0;
  console.log('result2 :>> ', result2);
}

const result1 = true == 1; // true
const result2 = false == 0; // true

const result3 = true === 1; // false
const result4 = false === 0; // false

const array1 = [];
const array2 = [];

const comparisonResult = array1 === array2;
console.log('comparisonResult :>> ', comparisonResult);
