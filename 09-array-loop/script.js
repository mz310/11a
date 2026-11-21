// ===== 1. Массив =====

const fruits = ["Алим", "Банана", "Усан үзэм"];

console.log(fruits[0]);       // эхний утга. Дугаар 0-ээс эхэлнэ
console.log(fruits[1]);       // хоёр дахь утга
console.log(fruits.length);   // нийт хэдэн утгатай вэ

// ===== 2. Давталт =====

// Массивын утга бүр дээр ажиллана
for (const fruit of fruits) {
  console.log("Жимс:", fruit);
}

// Тоогоор давтана: 1-ээс 5 хүртэл
for (let i = 1; i <= 5; i++) {
  console.log("Тоо:", i);
}

// ===== 3. Массивыг хуудсан дээр харуулах =====

// 1. СОНГО
const fruitList = document.querySelector(".fruit-list");
const countText = document.querySelector(".count");
const fruitInput = document.querySelector(".fruit-input");
const addButton = document.querySelector(".add-button");

function showFruits() {
  // Хуучин жагсаалтыг цэвэрлэнэ. Үгүй бол мөрүүд давхардана
  fruitList.innerHTML = "";

  for (const fruit of fruits) {
    const item = document.createElement("li"); // шинэ <li> үүсгэнэ
    item.textContent = fruit;                  // текст өгнө
    item.classList.add("fruit-item");          // class өгнө
    fruitList.append(item);                    // жагсаалтад байрлуулна
  }

  countText.textContent = `Нийт: ${fruits.length}`;
}

// Хуудас нээгдэхэд нэг удаа харуулна
showFruits();

// ===== 4. Шинэ жимс нэмэх =====

// 2. СОНС
addButton.addEventListener("click", function () {
  const newFruit = fruitInput.value;

  // 3. ӨӨРЧИЛ
  if (newFruit !== "") {
    fruits.push(newFruit);  // массивын төгсгөлд нэмнэ
    fruitInput.value = "";  // input-ийг цэвэрлэнэ
    showFruits();           // жагсаалтыг дахин зурна
  }
});
