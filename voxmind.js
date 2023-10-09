// Data Structures
// 1.Linked Lists
// 2.Doubly Linked Lists
// 3.Stack & Queues
// 4.Binar Search Trees
// 5.Hash Tables
// 6.Graphs

//BIG 0
function logItems(n) {
  // 0(n)
  for (let i = 0; i < n; i++) {
    // console.log("i: ", i);
  }

  // 0(2n)
  for (let j = 0; j < n; j++) {
    // console.log("j: ", j);
  }

  // 0(n²)
  for (let i = 0; i < n; i++) {
    // console.log(i);
    for (let j = 0; j < n; j++) {
      // console.log("i:", i);
      // console.log("j:", j);
    }
  }

  // O(n^3)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

// 0(n² + n)
function logItems2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

logItems2(5);

// 0(1);
function addItems(n) {
  return n + n + n;
}

function logItems3(a, b) {
  // 0(a)
  for (let i = 0; i < a; i++) {}

  // 0(b)
  for (let j = 0; j < b; j++) {}

  // 0(a * b)
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {}
  }
}

// const obj1 = {
//   value: 10
// }

// const obj2 = obj1

// const obj3 = obj2

// obj3.value = 12

// console.log("OBJ1: ", obj1.value)
// console.log("OBJ2: ", obj3.value)
// console.log("OBJ3: ", obj2.value)
