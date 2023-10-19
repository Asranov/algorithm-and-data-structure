// #0
// DATA STRUCTURE & ALGORITHM

// Algorithms
// Algoritm - muammoning qadam-baqadam yechimi (пошаговое решение проблемы)
// -Bitta muammo uchun bir qancha yechim bo'lishi mumkun (kak bu recept ovqat)

// Malumotlar - komputer xotirasida saqlanuvchi matn, rasm, video, audio, video, dasturlar vahokazo

// Data Structure
// Malumotlar tuzilmasi - malumotlardan samarali foydalanish uchun tartibga solishning o'ziga xos usuli
// (программная единица, позволяющая хранить и обрабатывать однотипные и/или логически связанные данные. )
// Структура данных - это способ организации информации так, чтобы ее можно было хранить и использовать в программе.

// Fanning dolzarbligi
// Mavjud muammoni bir necha yechimi bolishi mumkun va eng samaraligini ishlatish
// Agar bu fanni bilsa muammoni yechimini samarali yolini topish tez boladi

// #01 ALGORITMLAR | ALGORITM NIMA?
// Algoritm - bu muammoni hal qilish uchun aniq ketma-ketlikda beriladigon ko'rsatmalar to'plami
// Yaxshi algoritmning belgilari: Muammo va yechim aniq berilgan bo'lishi kerak, Algoritmning bosqichi aniq va rovchan bolishi kerak

function getSquare(a) {
  return a * a;
}

// Mashqlar
// 1.Foydalanuvchi kiritgan ikki sonni qo'shish algoritmi:
// -1. Start
// -2. son1, son2, summa o'zgaruvchilarini yaratamiz
// -3. son1, son2 qiymatlarini qabul qilamiz
// -4. son1, son2 larni qo'shamiz va summa ga yuklaymiz: summa = son1 + son2
// -5. summani qaytaramiz
// -6. Stop

function getSum(a, b) {
  const sum = 0;
  sum = a + b;

  return sum;
}

// #02 ALGORITMLAR | BINARY SEARCH
// Linear search (CHIZIQLI QIDIRISH ammo samarasiz) [1, 2, 3, 4, 5, 6, 7, 8, 9] agar bizga 5 kerak bolsa 1, 2, 3, 4, 5 va 5 ni qaytaradi va toxtaydi
// N ta elementdan iborat ro'yxat uchun: Maksimum qadamlar soni N ga teng

// Binary search [1 - 100] - 50? , [1 - 50] - 25? , [25 - 50] - 38? [25 - 38] -28? , [28 - 32] - 30? yes it was 30
// N ta elementdan iborat ro'yxat uchun: Maksimum qadamlar soni log,2(N) ga teng
// NOTICE: AGAR ROYXAT TARTIB BILAN BO'LMASA BINARY SEARCHXAM ISHLAMAYDI

function linearSearch(list, item) {
  let itemIdx;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == item) {
      itemIdx = i;
    } else {
      itemIdx = -1;
    }
  }

  return itemIdx;
}

function binarySearch(list, item) {
  if (!list.sorted) {
    list.sort();
  }

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (list[mid] === item) {
      return mid;
    } else if (list[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5], 4));

// #03 ALGORITMLAR | Big O
// BIG O - это способ оценки того, насколько быстро работает алгоритм

// Big O (Katta O) - algorithm tezligini o'lchash uchun mezon
// Big O eng yomon holatdagi tezlikni o'lchaydi
// Olchov birligi - operatsiyalar soni
// Linear Search uchun O(n)
// Binary Search uchun Olog2(n)

// Bazi algorithmlar tezligi (TARTIB BOYICHA TARTIBLANGAN !):
// O(log2n) - Binary Search
// Linear Search - O(n)
// O(n*log2n) - Quicksort Algorithms
// O(nkvadrat) - Slow Sorting Algoritms
// O(n!) - Traveling salesperson

// #04 ALGORITMLAR | ARRAY
// [1, 2, 3, 4, 5];
// length: 5,
// FirstIndex: 0,
// LastIndex: 4

// Array elementlari xotirada yonma-yon joylanadi
// BIG O
// Element oqish O(1)
// Element qo'shish O(n)

// #05 ALGORITMLAR | LINKED LIST
// LINKED LIST - bu ketmaketlikgi xotirada joylashuviga bog'liq bo'lmagan chiziqli ma'lumotlar to'plami
// A -> B -> C -> ...
// Solishtirish: Array va Linked List
// O'qish - O(1) , O(n) (Array oson o'qilishi/qidirish)
// Qo'shish - O(n), O(1) (Linked List oson qo'shish)
// O'chirish - O(n), O(1) (Linked List oson o'chirish)

// Linked List turlari:
// 1.Single Linked list - Bir tomonlama ro'yxat
// 2.Circular Linked List - Aylana ro'yxat
// 3.Double Linked List - Ikki tomonlama ro'yxat

// Abstract Ma'lumot Turlari
// Ma'lumot turiga dasturlash tilida uzilgan holda qarash
// Abstract ma'lumot turi u saqlaydi qiymatlar va uning ustida bajarish mumkun bo'lgan operasiyalar bilan aniqlanadi
// Misol uchun: Moshinani oladigon bo'lsak 4 ta baloni va 4 ta eshigi bo'r bu umumiy abstract

// #06 ALGORITMLAR | LINKED LISTS. AMALIYOT

// #07 ALGORITMLAR | SELECTION SORT
// Big O: O(n * 1/2 * n) = O(n * n) = O(nkvadrat)
// Ammo bu samarasiz usullardan biri

// #08 ALGORITMLAR | REKURSIYA
function lookForKey(key) {
  const qutilar = ["1 Quti", "2 Quti", "3 Quti", "4 Quti"];

  for (let i = 0; i < qutilar.length; i++) {
    if (qutilar[i] === key) {
      return true;
    } else {
      return false;
    }
  }
}

function reverseNumbers(n) {
  if (n <= 0) {
    return "Input should be a positive integer.";
  }

  for (let i = n; i >= 1; i--) {
    // console.log(i);
  }

  return 1;
}

reverseNumbers(10);

// #09 ALGORITMLAR | STACK VA REKURSIYA
// LIFO Ma'lumotlar to'plami
// LIFO (Last In First Out) - Oxirgi kirgan, birinchi chiqadi
// Ma'lumotlar to'plam ustida qo'shiladi va to'plam ustida olinadi
// STACK USTIDA AMALLAR: PUSH, POP

class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(item) {
    this.stack.push(item);
  }

  // Pop the top element from the stack and return it
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop(); // Corrected from this.items.pop()
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1]; // Corrected from this.items
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0; // Corrected from this.items.length
  }

  // Get the size of the stack
  size() {
    return this.stack.length; // Corrected from this.items.length
  }

  // Print the stack's contents
  print() {
    // console.log(this.stack);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print(); // Output: [1, 2, 3]

// #10 ALGORITMLAR | Divide and Conquer
// Bazida muammolarga yechim ko'rinmaydi
// Yaxshi dastur muammo oldida yengilmaydi
// Katta muammoni mayda muammoga bo'lib olamiz, har bir muammoni alohida hal qiladi
// Bu devide va concuer metodi deb ataladi

// #11 ALGORITMLAR | Quicksort
// Taxminan = O(nlogn)
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// const unsortedArray = [4, 2, 7, 1, 9, 3];
// const sortedArray = quicksort(unsortedArray);

// console.log("Unsorted Array:", unsortedArray);
// console.log("Sorted Array:", sortedArray);

// #12 ALGORITMLAR | Bubble sort
// Bubble sort - Big O: O(n * n)
// Eng soda tartiblash algorithm
// Qoshni elementlarni solishtirish va o'rnini almashtirish orqali ishlaydi
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = bubbleSort(unsortedArray);

// console.log("Unsorted Array:", unsortedArray);
// console.log("Sorted Array:", sortedArray);

// #13 ALGORITMLAR | Merge Sort
// Devide va Conquer usuli yordamida ishlaydigon tartiblash algorithm
// Ro'yxatni ikkiga bolib, ikki tarafni alohida tartiblab jamlash asosida ishlaydi
// Quich Sort tushunarliroq Merge Sortga qaraganda

// #14 ALGORITMLAR | Hash tables
// Tartibli Ro'yxat - Binary Search: O(log2n)
// -Anor: 20000
// -Banan: 25000
// -Hurmo: 12000

// Tartibsiz Ro'yxat - Linear Search: O(n)
// -Hurmo: 12000
// -Banan: 25000
// -Anor: 20000

// Hash funksiya matnni takrorlanmas, noyob songa o'tkazib beradi
// Hash funksiya turi ko'p
// Yaxshi hash funk belgilari: Bir xil matn uchun bir xil son qaytaradi, xar xil matn uchun xar xil son qaytaradi

// "Olma" -> Hash -> 5
// "Anor" -> Hash -> 0
// "Nok" -> Hash -> 4
// "Banan" -> Hash -> 2

// Hash foydali va ko'p ishlatiladigon ma'lumotlar tuzilmasi

// #15 ALGORITMLAR | Graph Maʼlumotlar tuzilmasi va Breadth-First algoritmi
// Qayerlarda ishlatilinadi ?
// Navigasiya
// Aloqa tarmoqlari
// IP routing
// Ijtimoiy tarmoqlarda siz taniydigon odamni topishda
// Robot/Dron uchun yo'l topishda

// Bredth-First qidirish algoritmi Graphlar bilan ishlaydi
// Ikki savolga javob beradi:
// 1.A va B node orasida yo'l bormi ?
// 2.A va B eng yaqin yo'l qaysi?

//#16 ALGORITMLAR | Graph va Breadth-First Search Dasturi
// Directed Graph (Yonaltirilgan graph) - bir tomonlama

// #17 ALGORITMLAR | Dijkstra Algoritmi
// Dijkstra Algoritmi vaznli graflarda "ENG ARZON" yo'lni topish uchun ishlatilinadi:
// -Masofa
// -Narx
// -Vaqt
// -vazn

// #18 ALGORITMLAR | Greedy Algoritmlar
// Bazida shunday muammolar bo'ladi xech qanday algoritmlar tushmaydi - shunday xolarda bizga greedy algo yordam beradi
// Greedy algo har doim ham eng to'g'ri yechimni bermaydi
// Lekin amalga oshirish (dasturlash) oson

// #19 ALGORITMLAR | NP-Muammolar
// Kichik sonlar uchun tez, katta sonlar uchun juda sekin ishlaydi

// #20 ALGORITMLAR | Dynamic Programming
// Dynamic Programming - Muammoning bir nechta mayda muammolarga bo'lib, ularga yechim topish orqali katta muammoga yechim topish usuli

//
// Tez yechim: Greedy Algo - tez lekin optimal emas
// Optimal yechim: Barcha kombinasiyalarni izlash

// #22 ALGORITMLAR | K-NN algoritmi. Klassifikasiya muammosi
// KNN - K-nearest neighbors (K-ta eng yaqin qo'shnilar)

// #23 ALGORITMLAR | K-NN algoritmi. Regressiya

// #24 ALGORITMLAR | Mustaqil o'rganish uchun tavsiyalar. 1-qism.
// TREES
// Taqoslemiz ARRAY VA BS TREE  ni
//           Array     BS TREE
// Qidirish  O(log2n)  O(log2n)
// Qoshish   O(n)      O(log2n)
// O'chirish O(n)      O(log2n)
// BUYERDA BS TREE G'olib bolmoqda
// Kamchilik tarafi MUVOZANATNI YO'QOTISH (YANI BIR TOMONDA MALUMOTLAR KOPAYIB KETISHI)

// TREE TURLARI:
// Red-black tree (o'zini muvozanatga keltiradi)
// B-tree (ma'lumotlar bazasida ishlatilinadi)
// Heap
// Splay tree

//INVERTED INDEXES (data structure)
// Google search qilgandaxam shu algorithmdan foydalanadi
