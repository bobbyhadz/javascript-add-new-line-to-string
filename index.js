const str = 'bobby\nhadz\ncom';

console.log(str);

document.write('First line<br />Second line<br />Third line');

const box = document.getElementById('box');

box.innerHTML = 'First line<br />Second line<br />Third line';

// ----------------------------------------------------

const first = 'First line';
const second = 'Second line';
const third = 'Third line';

box.innerHTML = first + '<br />' + second + '<br />' + third;

// ----------------------------------------------------

box.innerHTML = `First line<br />
second line<br />
third line`;

// --------------------------------------------------

// // Example 2

// const str = 'first line\nsecond line\nthird line';

// console.log(str);

// --------------------------------------------------

// // Example 3 - Using the addition (+) operator to add a new line to a String

// const str = 'bobby';

// const result = str + '\n' + 'hadz' + '\n' + 'com';

// console.log(result);

// --------------------------------------------------

// // Example 4 - Using a template literal to add new lines to a String

// const str = `first line
// second line
// third line`;

// console.log(str);

// --------------------------------------------------

// // Example 5 - With variable interpolation

// const first = 'bobby';
// const last = 'hadz';

// const str = `123 ${first}
// 345 ${last}
// third line`;

// console.log(str);

// --------------------------------------------------

// // Example 6 - Join the elements of an array with new lines

// const arr = ['bobby', 'hadz', 'com'];

// const result = arr.join('\n');

// console.log(result);

// --------------------------------------------------

// // Example 7 - Iterating over the array and adding a newline character to each string

// const arr = ['bobby', 'hadz', 'com'];

// let result = '';

// for (const element of arr) {
//   result += element + '\n';
// }

// console.log(result);

// --------------------------------------------------
