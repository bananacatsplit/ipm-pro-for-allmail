const allmail_autosenders = require('allmail-autosenders');
const ipm_pro_for_allmail = require('ipm-pro-for-allmail');
const jest = require('jest');
const supertest = require('supertest');
const dotenv = require('dotenv');
const firebase = require('firebase');

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);