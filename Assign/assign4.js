// assign 4 of js


//  // 1.
   const squareArray = originalArray.map(num => num ** 2);
   

//2. 
   const filteredAndCapitalized = stringArray
     .filter(str => str.length >= 5)
     .map(str => str.toUpperCase());
   

// 3. 
   const sortedObjects = arrayOfObjects.sort((a, b) => b.price - a.price);
   

// 4. 
   const sumOfEvens = array.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
   

//5. 
   const specificId = 'desiredId';
   const updatedArray = arrayOfObjects.map(obj => (obj.id === specificId ? { ...obj, status: 'completed' } : obj));
   

// /6. 
   const averagePositive = mixedArray
     .filter(num => num > 0)
     .reduce((acc, num, index, array) => acc + num / array.length, 0)
     .toFixed(2);
   

//7. 
   const adults = arrayObjects.filter(person => person.age >=  18);
   

// 8. 
        const sortedByLength = arrayStrings.sort((a, b) => a.length - b.length || arrayStrings.indexOf(a) - arrayStrings.indexOf(b));
   

//9. 
   const flattenedSum = arrayArrays.flat().reduce((acc, num) => acc + num, 0);
   

 // 10. 
    const customDefault = array.find(element => element.someCondition) || { customDefault: true };
    

 // 11. *Map Method:*
// - The map method applies a function to each element of an array and returns a new array with the results.It's useful for transforming array elements. Example:
const dualArray = numbers.map(num => num * 2);

 // 12. *Filter Method:*
    // - The filter method creates a new array with elements that pass a specific condition.Example:
const evenNumbers = numbers.filter(num => num % 2 === 0);

 // 13. *Sort Method:*
//    - The sort method arranges elements in an array. For strings and numbers, it works by converting elements to strings and comparing their sequences of UTF- // 16 code units. For custom sorting, a comparison function can be provided.

 // 14. *Reduce Method:*
    // - The reduce method aggregates array elements into a single value.Example:
const sum = numbers.reduce((acc, num) => acc + num, 0);

 // 15. *Find Method:*
//    - The find method returns the first element in an array that satisfies a given condition. It stops searching once such an element is found. It's more appropriate when you only need one matching element.

 // 16. *Combining Methods:*
//    - const result = array.map(...).filter(...).reduce(...);

 // 17. *Callback Functions:*
// - Callback functions are functions passed as arguments to other functions.Example with map:
const squaredArray = numbers.map(function square(num) { return num ** 2; });

 // 18. *Error Handling:*
//    - For error handling with find or reduce, you can use conditional checks or the optional chaining operator (?.).

 // 19. *Immutable Operations:*
//    - Immutability is essential for maintaining the original array.Example with map:
const doubledArray = originalArray.map(num => num * 2);

// //20. *Performance Considerations:*
//    - map is generally preferred when you want to transform elements, while forEach is used for side effects. If you need a new array with modified elements, map is more suitable. Performance-wise, map can be more optimized by  engines in certain scenarios.