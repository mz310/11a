// ===== 1. СОНГО: элементүүдээ олно =====
// document: HTML хуудас бүхэлдээ
// querySelector(".name"): "name" class-тай элементийг олж өгнө
const nameText = document.querySelector(".name");
const hobbyText = document.querySelector(".hobby");
const ageText = document.querySelector(".age");

// Сонгосон элементээ консол дээр харж болно
console.log(nameText);

// ===== 2. Харуулах өгөгдөл =====
const studentName = "Анужин";
const hobby = "Зураг зурах";
const age = 13;

// ===== 3. ӨӨРЧИЛ: элементийн текстийг солино =====
nameText.textContent = studentName;
hobbyText.textContent = "Хобби: " + hobby;
ageText.textContent = `Нас: ${age}`;

// ===== 4. Элементийн текстийг уншиж болно =====
console.log(nameText.textContent);
