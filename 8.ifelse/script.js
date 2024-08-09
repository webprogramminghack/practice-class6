' use strict';

{
  // if (kondisi) {
  //   // kode yang akan dijalankan jika kondisinya benar
  // }

  const age = 18;

  if (age >= 18) {
    console.log('You are an adult');
  }

  if (1) {
    console.log('truthy');
  }

  if (0) {
    console.log('falsy');
  }

  if ('') {
    console.log('falsy');
  }

  if (null) {
    console.log('falsy');
  }

  if (undefined) {
    console.log('falsy');
  }

  if (NaN) {
    console.log('falsy');
  }
}

{
  // if (kondisi) {
  //   // kode yang akan dijalankan jika kondisinya benar
  // } else {
  //   // kode yang akan dijalankan jika kondisinya salah
  // }

  const age = 16;

  if (age >= 16) {
    console.log('You are an adult');
  } else {
    console.log('You are a mintor'); // ini akan dijalankan jika kondisinya salah
  }
}

{
  // if (kondisi1) {
  //   // kode yang akan dijalankan jika kondisi1 benar
  // } else if (kondisi2) {
  //   // kode yang akan dijalankan jika kondisi2 benar
  // } else {
  //   // kode yang akan dijalankan jika semua kondisi di atas salah
  // }

  const age = 20;

  if (age < 13) {
    console.log('You are a child.');
  } else if (age >= 13 && age < 20) {
    console.log('You are a teenager.');
  } else {
    console.log('You are an adult.'); // Ini akan dijalankan karena semua kondisi di atas salah
  }
}

{
  // kondisi ? ekspresi1 : ekspresi2;

  const age = 18;

  const message = age >= 18 ? 'You are an adult' : 'You are a minor';

  console.log('message :>> ', message);
}

{
  // kondisi1 || kondisi2

  const isWeekend = true;
  const isHoliday = false;

  if (isWeekend || isHoliday) {
    console.log('You can relax today');
  } else {
    console.log('You have to work today');
  }

  if (isWeekend && isHoliday) {
    console.log('You can relax today');
  } else {
    console.log('You have to work today');
  }
}

const age = 18;
const message = age >= 18 ? 'You are an adult' : 'You are a minor';

{
  const age = 18;
  let message;

  if (age) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
}
