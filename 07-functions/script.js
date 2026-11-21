// ===== 1. Энгийн функц =====

// Зарлах: энэ үед ажиллахгүй
function sayHello() {
  console.log("Сайн уу!");
}

// Дуудах: энэ үед ажиллана
sayHello();
sayHello();

// ===== 2. Параметртэй функц =====

function greet(userName) {
  console.log("Сайн уу, " + userName + "!");
}

greet("Болд");
greet("Сараа");

// ===== 3. Утга буцаадаг функц =====

function double(number) {
  return number * 2;
}

const result = double(4);
console.log("4-ийг хоёр дахин:", result);

// ===== 4. Функцийг хуудастай хамт ашиглах =====

// 1. СОНГО
const moodScreen = document.querySelector(".mood-screen");
const emojiText = document.querySelector(".emoji");
const moodText = document.querySelector(".mood-text");
const happyButton = document.querySelector(".happy-button");
const sadButton = document.querySelector(".sad-button");
const angryButton = document.querySelector(".angry-button");

// Гурван товч бараг ижил зүйл хийнэ: эможи, текст, өнгө солино.
// Тиймээс ганц функц бичээд, ялгаатай хэсгийг нь параметрээр өгнө.
function showMood(emoji, text, colorClass) {
  emojiText.textContent = emoji;
  moodText.textContent = text;

  // Өмнөх өнгийг арилгаад шинийг нэмнэ
  moodScreen.classList.remove("happy", "sad", "angry");
  moodScreen.classList.add(colorClass);
}

// 2. СОНС, 3. ӨӨРЧИЛ: нэг функцийг өөр өөр утгаар дуудна
happyButton.addEventListener("click", function () {
  showMood("😀", "Би баяртай байна!", "happy");
});

sadButton.addEventListener("click", function () {
  showMood("😢", "Би гунигтай байна", "sad");
});

angryButton.addEventListener("click", function () {
  showMood("😡", "Би ууртай байна!", "angry");
});
