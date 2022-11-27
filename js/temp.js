'use strict';

const ownerPhone = apartment.owner.; //'982-126-1588';
const ownerEmail = apartment.owner.; //'henry.carter@aptmail.com';
const numberOfTags = apartment.owner.; //3;
const firstTag = apartment.owner.; //'premium';
const lastTag = apartment.owner.; //'top';

/*
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [2, 4, 5, 7, 11, 15];

for (let i of array1) {
  if (array2.includes(i)) {
    common.push(i);
  }
}

function getCommonElements(array1, array2) {
  const common = []; // Array to contain common elements

  for (let i of array1) {
    if (array2.includes(i)) {
      common.push(i);
    }

    return common; // Return the common elements
  }
}

function findLongestWord(string) {
  // Change code below this line
  let longestWord;
  let wordLength = 0;
  const words = string.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    // console.log(words[i].length);
    if (words[i].length > wordLength) {
      indexLongestWord = i;
      wordLength = words[i].length;
    }
    return words[indexLongestWord];
  }

  // Change code above this line
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // call returns jumped
console.log(findLongestWord('Google do a roll')); // call returns Google
console.log(findLongestWord('May the force be with you')); // call returns force

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // returns 138
console.log(calculateTotalPrice([164, 48, 291])); // returns 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // returns 1116

function calculateTotal(number) {
  let totalSum = 0;

  for (let i = 0; i <= number; i += 1) {
    totalSum += i;
  }
  return totalSum;
}

calculateTotal(1); // returns 1
calculateTotal(3); // returns 6
calculateTotal(7); // returns 28
calculateTotal(18); // returns 171
calculateTotal(24); // returns 300

console.log(calculateTotal(1)); // returns 1
console.log(calculateTotal(3)); // returns 6
console.log(calculateTotal(7)); // returns 28
console.log(calculateTotal(18)); // returns 171
console.log(calculateTotal(24)); // returns 300

// console.log(

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}

// console.log(biggerNumber); //"''""""" 10"""""'''''''''''''''''''''''''''''

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return newArray.length <= maxLength ? newArray : newArray.slice(0, maxLength);
// }

makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); // returns ["Mango", "Poly", "Ajax"]
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); // returns ["Mango", "Poly", "Houston", "Ajax"]
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); // returns ["Mango", "Ajax", "Chelsea"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); // returns ["Earth", "Jupiter"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); // returns ["Earth", "Jupiter", "Neptune", "Uranus"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); // returns []
// The function makeArray() call with random arrays, and a random number returns the correct array

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// returns ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// returns ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// returns ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// returns ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// returns ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// returns []

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2); // The variable firstTwoEls value is an array ["apple", "plum"]
const nonExtremeEls = fruits.slice(1, -1); // The variable nonExtremeEls value is an array ["plum", "pear", "orange"]
const lastThreeEls = fruits.slice(-3); // The variable lastThreeEls value is an array ["pear", "orange", "banana"]

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

function slugify(title) {
  const slagString = title.toLowerCase().split(' ').join('-');
  return slagString;
}

slugify('Arrays for begginers'); // returns "arrays-for-begginers"
slugify('English for developer'); // returns "english-for-developer"
slugify('Ten secrets of JavaScript'); // returns "ten-secrets-of-javascript"
slugify('How to become a JUNIOR developer in TWO WEEKS'); // returns "how-to-become-a-junior-developer-in-two-weeks"

console.log(slugify('Arrays for begginers')); // returns "arrays-for-begginers"
console.log(slugify('English for developer')); // returns "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // returns "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // returns "how-to-become-a-junior-developer-in-two-weeks"

makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '); // returns "Mango hurries to the train"
makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''); // returns "Mango"
makeStringFromArray(['top', 'picks', 'for', 'you'], '_'); // returns "top_picks_for_you"

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
); // returns "Mango hurries to the train"
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // returns "Mango"
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // returns "top_picks_for_you"

function slugify(title) {
  // Change code below this line
  // Change code above this line
}

// .split(' ').length;
*/
