// ===== Жишээ 1: Товч дарахад текст солигдоно =====

// 1. СОНГО
const message = document.querySelector(".message");
const helloButton = document.querySelector(".hello-button");

// 2. СОНС
helloButton.addEventListener("click", function () {
  // 3. ӨӨРЧИЛ
  message.textContent = "Сайн уу! Чи товчийг дарлаа";
  console.log("Товч дарагдлаа");
});

// ===== Жишээ 2: Тоолуур =====

// 1. СОНГО
const countText = document.querySelector(".count");
const plusButton = document.querySelector(".plus-button");

// Тоог хувьсагчид хадгална. Өөрчлөгдөх тул let
let count = 0;

// 2. СОНС
plusButton.addEventListener("click", function () {
  // 3. ӨӨРЧИЛ
  count = count + 1;
  countText.textContent = count;
});
