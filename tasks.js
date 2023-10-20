// Linear Search Tasks:
// Task 1:
// Write a JavaScript function that performs a linear search on an array of numbers. The function should take two arguments:
// An array of numbers.
// A target number to search for.
// The function should return the index of the target number in the array if it exists, or -1 if the target number is not found in the array.

function searchIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

searchIndex([3, 2, 4, 1, 5, 2], 2);

// Task 2:
// Write a JavaScript function that finds the maximum value in an array using linear search.
// The function should return the maximum value.
function findMaxValue(arr) {
  let maxValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

// Task 3:
// Create a function that counts how many times a specific element appears in an array.
// Use linear search to perform the count and return the result.
function countOccurences(arr, elem) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count++;
    }
  }

  return count;
}
