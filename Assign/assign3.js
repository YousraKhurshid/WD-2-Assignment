//Assignment 3 of js

// 1.
let score = 81;

let result = score >= 80 ? "Pass" : "Fail";


// 2. The optional chaining operator (?.) allows you to access properties of an object without explicitly checking if each level of the nested structure exists. If any property in the chain is null or undefined, the expression short-circuits and returns undefined.

// 3. for...in is used to iterate over the enumerable properties of an object, while for...of is used to iterate over the values of iterable objects like arrays, strings, etc.

// 4.
function calculateAverage(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}


// 5. Closures in JavaScript occur when a function is defined inside another function, allowing the inner function to access variables from the outer (enclosing) function even after the outer function has finished execution.

// 6.
const student = {
  name: "John",
  age: 20,
  grades: [90, 85, 88],
  calculateAverage: function () {
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  },
};


// 7. Cloning an object:
//    - Deep copy: let deepCopy = JSON.parse(JSON.stringify(originalObject));
//    - Shallow copy: let shallowCopy = Object.assign({}, originalObject);
//    - Reference copy: let referenceCopy = originalObject;

// 8. 

let numbers = [1,2,3,4,5];
numbers.forEach((num) => {
  console.log(num % 2 === 0 ? "Even" : "Odd");
});


// 9. for loop is typically used when you know the exact number of iterations, while loop is used when the number of iterations is not known in advance, and do...while loop ensures that the code inside the loop will run at least once.

// 10.
let arrayOfObjects = [
    { name: 'Alice', age: 25, address: { city: 'New York' } },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22, address: { city: 'San Francisco' } }
  ];
  
  for (const person of arrayOfObjects) {
    // Use optional chaining to access potentially missing properties
    const cityName = person?.address?.city || 'Unknown';
  
    console.log(`${person.name} lives in ${cityName}`);
  }
  

// 11.
for (const prop in myObject) {
  console.log(`Property: ${prop}, Value: ${myObject[prop]}`);
}


// 12. break is used to exit a loop prematurely, and continue is used to skip the rest of the code inside the loop for the current iteration.

// 13.
function calculateTax(income) {
  return income <= 50000 ? income * 0.1 : income <= 100000 ? income * 0.15 : income * 0.2;
}


// 14. 
const car = {
  make: "Toyota",
  model: "Camry",
  startEngine: function () {
    console.log("Engine started!");
  },
};

car.startEngine();


// 15. Arrow functions have a concise syntax, do not bind their own this, and inherit this from the enclosing scope. Regular functions have their own this binding and can be used as constructors, while arrow functions cannot.
