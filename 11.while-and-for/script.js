'use strict';

{
  let i = 0;

  while (i <= 3) {
    // console.log(i);
    i++;
  }
}

{
  let i = 3;

  while (i) {
    // console.log(i);
    i--;
  }
}

{
  let i = 6;
  while (i <= 5) {
    // console.log(i);
    i++;
  }

  // console.log('---separator---');

  let j = 6;
  do {
    // console.log(j);
    j++;
  } while (j <= 5);
}

for (let i = 0; i < 3; i++) {
  // console.log(i);
}

let sum = 0;

while (sum < 100) {
  if (sum === 5) break;
  // console.log(sum);
  sum++;
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  // console.log(i);
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == 1 && j == 1) break outer; // (*)

    // console.log(`Value at coords (${i},${j})`);
  }
}

// console.log('Done!');

for (let x = 1; x <= 5; x++) {
  let combined = '';
  for (let y = 1; y <= x; y++) {
    combined += y;
  }
  console.log(combined);
}
