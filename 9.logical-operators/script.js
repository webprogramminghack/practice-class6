'use strict';

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

if (1 || 0) {
  // seperti if(true || false)
  // console.log('truthy!'); // 'truthy!'
}

// console.log(1 || 0); // 1
// console.log(null || 1); // 1
// console.log(null || 0 || 1); // 1
// console.log(undefined || null || 0); // 0

const result1 = 0 || 1 || 0 || true;
console.log('result :>> ', result1);

const result2 = 0 && 1 && 'hello';
console.log('result2 :>> ', result2);

const execute = true;

// if (execute) {
//   console.log('run');
// }

// execute && console.log('run');

if (0 || false || '' || 1) {
  // console.log('Will this run?');
}

if (0 && false && '' && 1) {
  // console.log('Will this run?');
}

// prettier-ignore
// console.log(a && b || c && d);
// console.log((a && b) || (c && d));e

// console.log(Boolean('non-empty string'));
// console.log(Boolean(null));

// console.log(!!'non-empty string');
// console.log(!!null);

console.log(!'non-empty string');
console.log(!null);

// let holiday = true;

// if (!holiday) {

// }
