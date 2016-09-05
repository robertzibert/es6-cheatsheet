// var name = 'Jane';
// var title = 'Software Ing';
// var hourlyWage = 40;

// ES6
const name = 'Jane'; // Don't expect to change
let title = 'software Ing'; // Expect to change
let hourlyWage = 40;
// Some time later ...
title = 'Senior software Ing';
hourlyWage = 50;


function count(targetString) {
  const chars = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if(chars.includes(targetString[i])) {
      number ++;
    }
  }
  return number;
}
count('asdasdasdasd')
