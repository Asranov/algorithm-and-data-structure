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

// Task 4:
// Write a function to find the index of the first occurrence of a given element in an array.
// Return -1 if the element is not found.
function findFirstOccurrence(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return elem;
    }
  }

  return -1;
}

// Binary Search Tasks:
// Task 1:
// Write a JavaScript function to perform binary search on a sorted array.
// The function should take an array and a target value and
// return the index of the target value if it's found, or -1 if it's not in the array.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Task 2:
// Create a function that finds and returns the middle element of a sorted array.
// If the array has an even number of elements, return the element to the left of the middle.
function findMiddleElement(arr) {
  const length = arr.length;
  const middleIndex = Math.floor(length / 2);
  debugger;

  if (length % 2 === 0) {
    return arr[middleIndex - 1];
  } else {
    return arr[middleIndex];
  }
}

console.log(findMiddleElement([1, 2, 3, 4]));
