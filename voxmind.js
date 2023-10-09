// Data Structures
// 1.Linked Lists
// 2.Doubly Linked Lists
// 3.Stack & Queues
// 4.Binar Search Trees
// 5.Hash Tables
// 6.Graphs

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

logItems(10);
