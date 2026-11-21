// ===== Жишээ 1: Гэрэл =====

// 1. СОНГО
const lamp = document.querySelector(".lamp");
const onButton = document.querySelector(".on-button");
const offButton = document.querySelector(".off-button");
const toggleButton = document.querySelector(".toggle-button");

// 2. СОНС, 3. ӨӨРЧИЛ

// add: class нэмнэ
onButton.addEventListener("click", function () {
  lamp.classList.add("lamp-on");
});

// remove: class хасна
offButton.addEventListener("click", function () {
  lamp.classList.remove("lamp-on");
});

// toggle: байвал хасна, байхгүй бол нэмнэ
toggleButton.addEventListener("click", function () {
  lamp.classList.toggle("lamp-on");
});

// ===== Жишээ 2: Харанхуй горим =====

const page = document.querySelector(".page");
const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", function () {
  page.classList.toggle("dark-mode");
});
