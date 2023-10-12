// #0
// DATA STRUCTURE & ALGORITHM

// Algorithms
// Algoritm - muammoning qadam-baqadam yechimi (пошаговое решение проблемы)
// -Bitta muammo uchun bir qancha yechim bo'lishi mumkun (kak bu recept ovqat)

// Malumotlar - komputer xotirasida saqlanuvchi matn, rasm, video, audio, video, dasturlar vahokazo

// Data Structure
// Malumotlar tuzilmasi - malumotlardan samarali foydalanish uchun tartibga solishning o'ziga xos usuli
// (программная единица, позволяющая хранить и обрабатывать однотипные и/или логически связанные данные. )

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

console.log(linearSearch([1, 2, 3, 4, 5], 4));

// #03 ALGORITMLAR | Big O
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
