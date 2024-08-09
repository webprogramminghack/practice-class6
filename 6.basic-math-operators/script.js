'use strict';

// unary, binary, dan operand
// unary: operator yang hanya membutuhkan satu operand.
{
  let x = 1;
  x = -x; // Unary negation
  // console.log(x);
}

// Binary: Operator yang membutuhkan dua operand.
{
  let x = 1;
  let y = 3;
  let z = x + y; // Binary addition
  // console.log(z);
}

// Remainder / modulus
{
  const a = 12;
  const b = 3;
  const result = a % b;
  // console.log(result);
}

// Eksponensial
{
  const a = 2;
  const b = 3;
  const result = a ** b;
  // console.log('result :>> ', result);
}

{
  let x = 10;
}

{
  let x = 10;
  // x = x + 5;
  x += 5;
  // x -= 5;
  // console.log('x :>> ', x);
}

{
  let x = 10;
  x *= 5;
  // console.log('x :>> ', x);
}

{
  let x = 10;
  x /= 5;
  // console.log('x :>> ', x);
}

{
  let x = 10;
  x %= 3;
  // console.log('x :>> ', x);
}

// Operator increment dan decrement
{
  let counter = 5;
  // console.log(counter++);
  // console.log(++counter);
}

{
  let counter = 5;
  // console.log(counter--);
  // console.log(--counter);
}

// test
{
  let n = 2;

  n += 2;
  n *= 2;

  console.log(n); // 14

  let counter = 5;
  console.log(counter++); // 5
  console.log(counter); // 6

  counter = 5;

  console.log(++counter); // 6
}
