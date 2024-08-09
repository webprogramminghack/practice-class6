'use strict';

// explicit conversion
{
  const str = '123Hello';
  const num = Number(str);

  // console.log('type', typeof num);
  // console.log('num :>> ', num);

  const str3 = 'hello' / 2;
  // console.log('str3 :>> ', str3);

  const str4 = '100' * 2;
  // console.log('str4 :>> ', str4);
}

// number to string
{
  const num = 123;
  const str = String(num);
  // console.log(typeof str);
  // console.log(str);
}

// boolean to string
{
  const bool = true;
  const str = String(bool);
  // console.log(typeof str);
  // console.log(str);
}

// // string to boolean
{
  const str = 'true';
  const bool = Boolean(str);
  console.log(typeof bool);
  console.log(bool);
}

// -------

// implicit conversion
// string and number
// number to string
const result1 = '5' + 2;
console.log('result1 :>> ', result1);

// string to number
const result2 = '5' * 2;
console.log('result2 :>> ', result2);

// boolean
const result3 = true + 1;
console.log('result3 :>> ', result3);

const result4 = false + 1;
console.log('result4 :>> ', result4);

// undefined and null
const result5 = undefined + 1;
console.log('result5 :>> ', result5);

const result6 = null + 1;
console.log('result6 :>> ', result6);

// comparison non-strict equality
console.log(5 == '5');

// comparison strict equality
console.log(5 === '5');

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);
