// ===== 1. let: утгыг нь дараа өөрчилж болно =====
let score = 0;
console.log("Эхний оноо:", score);

score = 10;
console.log("Шинэ оноо:", score);

// ===== 2. const: утга нь өөрчлөгдөхгүй =====
const studentName = "Тэмүүлэн";
console.log("Нэр:", studentName);

// ===== 3. Өгөгдлийн төрөл =====
const city = "Улаанбаатар"; // string: текст, хашилтад бичнэ
const age = 12;             // number: тоо, хашилтгүй бичнэ
const isStudent = true;     // boolean: true (үнэн) эсвэл false (худал)

// typeof нь утгын төрлийг хэлж өгнө
console.log(typeof city);
console.log(typeof age);
console.log(typeof isStudent);

// ===== 4. Тоон үйлдэл =====
const apples = 5;
const oranges = 3;
const totalFruits = apples + oranges;
console.log("Нийт жимс:", totalFruits);

const applePrice = 500;
const totalPrice = apples * applePrice;
console.log("Алимны үнэ:", totalPrice);

// ===== 5. Текст нийлүүлэх =====
const greeting = "Сайн уу, " + studentName + "!";
console.log(greeting);

// ` ` тэмдэг дотор ${ } бичээд хувьсагчаа оруулна
const introduction = `Намайг ${studentName} гэдэг. Би ${age} настай.`;
console.log(introduction);

// ===== 6. Хувьсагчийн утгыг хуудсан дээр харуулах =====
// querySelector-ийг 03-р хичээлд дэлгэрэнгүй үзнэ
document.querySelector(".intro").textContent = introduction;
