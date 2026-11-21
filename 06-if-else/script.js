// ===== Жишээ 1: Оноо цуглуулах =====

// 1. СОНГО
const scoreText = document.querySelector(".score");
const statusText = document.querySelector(".status-text");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");

let score = 0;

// 2. СОНС
plusButton.addEventListener("click", function () {
  score = score + 1;
  scoreText.textContent = score;

  // 3. ӨӨРЧИЛ: онооноос хамаарч өөр текст, өөр загвар
  if (score >= 10) {
    statusText.textContent = "Ялагч!";
    scoreText.classList.add("gold");
  } else if (score >= 5) {
    statusText.textContent = "Сайн байна, үргэлжлүүл!";
    scoreText.classList.remove("gold");
  } else {
    statusText.textContent = "Эхэлцгээе!";
    scoreText.classList.remove("gold");
  }
});

minusButton.addEventListener("click", function () {
  // Оноо 0-ээс их үед л хасна. else байхгүй бол худал үед юу ч хийхгүй
  if (score > 0) {
    score = score - 1;
  }
  scoreText.textContent = score;

  if (score >= 10) {
    statusText.textContent = "Ялагч!";
    scoreText.classList.add("gold");
  } else if (score >= 5) {
    statusText.textContent = "Сайн байна, үргэлжлүүл!";
    scoreText.classList.remove("gold");
  } else {
    statusText.textContent = "Эхэлцгээе!";
    scoreText.classList.remove("gold");
  }
});

// Анзаарсан уу? Ижил if хэсгийг хоёр удаа бичлээ.
// Үүнийг 07-р хичээлд функц ашиглан нэг удаа бичдэг болгоно.

// ===== Жишээ 2: Class байгаа эсэхийг шалгах =====

const likeButton = document.querySelector(".like-button");

likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("liked");

  // contains: тухайн class байвал true, байхгүй бол false
  if (likeButton.classList.contains("liked")) {
    likeButton.textContent = "Таалагдсан";
  } else {
    likeButton.textContent = "Таалагдлаа";
  }
});
