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
