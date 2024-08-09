'use strict';

// {
//   let user;

//   console.log(user ?? 'Anonymous'); // Anonymous (user is undefined || null)
// }

// {
//   let firstName = null;
//   let lastName = null;
//   let nickName = 'Supercoder';

//   console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');
// }

let height;
let width = 100;

// let area = (height ?? 100) * (width ?? 50);
// console.log('area :>>', area);

let x = (1 && 2) ?? 3;
console.log('x :>> ', x);
