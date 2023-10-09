// Data Structures
// 1.Linked Lists
// 2.Doubly Linked Lists
// 3.Stack & Queues
// 4.Binar Search Trees
// 5.Hash Tables
// 6.Graphs

// 0(n)
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log("i: ", i);
  }

  // 0(2n)
  for (let j = 0; j < n; j++) {
    console.log("j: ", j);
  }
}

logItems(5);
