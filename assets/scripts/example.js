console.log("Welcome to the first lab of Dynamic Web Technologies");

// Create an arrow function that takes an array of numbers and returns a new array with each number doubled.
// Use the map method. (more about map function in the Links section)

// https://www.geeksforgeeks.org/javascript/how-to-use-map-filter-and-reduce-in-javascript/

const arr = [1, 2, 3, 4, 5];

const doubled = (array) => array.map(number => number * 2);

console.log(doubled(arr));