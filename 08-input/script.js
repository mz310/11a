// ===== Жишээ 1: Нэрээр нь мэндлэх =====

// 1. СОНГО
const nameInput = document.querySelector(".name-input");
const greetButton = document.querySelector(".greet-button");
const greeting = document.querySelector(".greeting");

// 2. СОНС
greetButton.addEventListener("click", function () {
  // Input-д яг одоо бичсэн утгыг value-аар уншина
  const userName = nameInput.value;

  // 3. ӨӨРЧИЛ
  if (userName === "") {
    // Хоосон бол анхааруулна
    greeting.textContent = "Эхлээд нэрээ бичээрэй!";
    greeting.classList.add("error");
  } else {
    greeting.textContent = `Сайн уу, ${userName}!`;
    greeting.classList.remove("error");

    // Input-ийг цэвэрлэнэ
    nameInput.value = "";
  }
});

// ===== Жишээ 2: Хоёр тоог нэмэх =====

const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const sumButton = document.querySelector(".sum-button");
const sumResult = document.querySelector(".sum-result");

sumButton.addEventListener("click", function () {
  // value үргэлж текст буцаана. Number() түүнийг тоо болгоно
  const first = Number(firstInput.value);
  const second = Number(secondInput.value);

  const sum = first + second;
  sumResult.textContent = `= ${sum}`;

  // Number()-гүй бол юу болохыг консол дээр хар
  console.log("Number-гүй:", firstInput.value + secondInput.value);
  console.log("Number-тэй:", sum);
});
