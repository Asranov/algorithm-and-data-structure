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
