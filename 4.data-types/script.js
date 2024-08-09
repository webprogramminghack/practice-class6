'use strict';

// primitive data types

// number
const age = 30;
const pi = 3.14159;

// console.log(typeof pi);

// string
// prettier-ignore
const name = "Alice";
const greeting = 'Hello, World!';
const templateString = `This is a template string.`;

// console.log(typeof templateString);

//undefined
let x; // Tidak memberikan nilai saat deklarasi
// console.log(x);

// null
const y = null;
// console.log(y);

// Bigint
const bigNumber = 123456123986123123123n;

// console.log(typeof bigNumber);

// non-primitive data types

// Object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

// person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 25,
// };

console.log('sebelum dirubah: ', person.firstName);

person.firstName = 'Victor';

console.log('setelah dirubah: ', person.firstName);

// person = {
//   firstName: 'Victor',
//   lastName: 'Doe',
//   age: 25,
// };

// console.log(person.firstName);

// Array
const colors = ['red', 'green', 'blue'];
// console.log(colors[0]);

// console.log(typeof colors);

const greet = function (name) {
  return `Hello, ${name}`;
};

// console.log(typeof greet);

// console.log('Valuenya adalah:', colors[0]);
// console.log(colors[0], colors[1]);
