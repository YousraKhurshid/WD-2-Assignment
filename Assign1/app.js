// 1. Question: Reverse a string without using the built-in reverse() method.
let aString = "Reversing";
let reversedArray = [];

for (let i = aString.length - 1; i >= 0; i--) {
  reversedArray.push(aString[i]);
}

let reversedString = reversedArray.join('');
console.log('The reversed sentence:', reversedString);

// 2.  Question: To count vowels in a string:
const aString4q2 = "example";
const vowelCount = aString4q2.split(/[aeiouAEIOU]/).length - 1;
console.log("Number of vowels: " + vowelCount);

// 3.  Question: To convert the first letter of each word to uppercase in a sentence:
const sentence = "i have writed each word to uppercase successfully";
const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

const result = words.join(" ");
console.log(result);


// 4.  Question: To check if a string is a palindrome:

 
const str = "radar";
const reversed = str.split("").reverse().join("");
const isPalindrome = str === reversed;
console.log("Is palindrome: " + isPalindrome);


// 5.  Question: To find the sum of all positive numbers in an array:

 
const positiveNumbers = [1, -2, 3, -4, 5];
const sum = positiveNumbers.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
console.log("Sum of positive numbers: " + sum);


// 6.  Question: To find the index of the first occurrence of a specific element in an array:

 
const array1 = [1, 2, 3, 4, 5];
const target = 3;
const index = array1.indexOf(target);
console.log("Index of " + target + ": " + index);


// 7.  Question: To remove duplicates from an array without built-in methods:

 
const array2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array2)];
console.log(uniqueArray);


// 8.  Question: To sort an array in ascending and descending order without built-in methods:

 
const array3 = [5, 2, 8, 1, 3];

// Ascending
const ascendingArray = [...array3].sort((a, b) => a - b);
console.log("Ascending: " + ascendingArray);

// Descending
const descendingArray = [...array3].sort((a, b) => b - a);
console.log("Descending: " + descendingArray);


// 9.  Question: To print even numbers between 1 and 20 using a while loop:
let num = 1;

while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}
// 10.  Question: To calculate the factorial of a number using a do-while loop:
let aNumber = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= aNumber);

console.log("Factorial of " + aNumber + ": " + factorial);


// 11.  Question: To iterate through the properties of an object using a for-in loop:

 
const myObject = { prop1: "value1", prop2: "value2", prop3: "value3" };

for (const prop in myObject) {
    console.log(prop + ": " + myObject[prop]);
}


// 12.  Question: To loop through an array using a for-of loop and double each element:

 
const numbers = [1, 2, 3, 4];
const doubledNumbers = [];

for (const num of numbers) {
    doubledNumbers.push(num * 2);
}

console.log(doubledNumbers);


// 13.  Question: To check if a number is even or odd and return a corresponding message:
const number = 7;

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}


// 14.  Question: To find the maximum of three numbers using nested ternary operators:
const num1 = 10, num2 = 5, num3 = 8;
const max = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);

console.log("Maximum: " + max);


// 15.  Question: To determine if a year is a leap year or not:

const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

