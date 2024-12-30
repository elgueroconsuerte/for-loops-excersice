
// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code
const array1 = ['one', 'two', 'three'];
export function reverseArray(array) {
  // Your code goes here...
  let reverseArray = [];
  for (let i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
  }
  return reverseArray;

}
console.log(reverseArray(array1));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function