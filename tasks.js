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

  if (length % 2 === 0) {
    return arr[middleIndex - 1];
  } else {
    return arr[middleIndex];
  }
}

// BIG O TASKS:
// O(1) - Constant Time
function returnFirstElement(arr) {
  return arr[0];
}

// O(n) - Linear Time
function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// O(n^2) - Quadratic Time:
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[i] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// O(log n) - Logarithmic Time:
function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === target) {
      return mid;
    }
    if (sortedArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Arrays & Linked Lists
// Task 1:
// Declare an array called fruits with the elements "apple," "banana," "cherry."
// Add "orange" to the end of the array.
// Remove the first element from the array.

const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();

// Task 2:
// Implement a Node class with a constructor that takes a value.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task 3:
// Implement a LinkedList class with head, insert, and display methods.

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    // console.log(elements);
  }
}

// Алгоритм Рекурсивный
function factorial(n) {
  // debugger;
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const result = factorial(3);

function sumOfIntegers(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumOfIntegers(n - 1);
  }
}

// console.log(sumOfIntegers(3));

// Iterative thinking: the for loop:
function pow(x, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3));

// Recursive thinking: simplify the task and call self:
function powR(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
