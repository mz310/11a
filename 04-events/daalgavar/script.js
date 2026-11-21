// 04-р хичээлийн даалгавар: Оноо тоологч

// TODO 1: СОНГО. Дөрвөн элементийг сонгож хувьсагчид хадгал
//   .score         ->  scoreText
//   .plus-button   ->  plusButton
//   .minus-button  ->  minusButton
//   .reset-button  ->  resetButton
const scoreText = document.querySelector(".score");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const resetButton = document.querySelector(".reset-button");
// TODO 2: score нэртэй хувьсагч үүсгэж 0 утга өг (let ашигла)
let score = 0;

// TODO 3: plusButton дарахад score нэгээр нэмэгдэж, хуудсан дээр харагдан

plusButton.addEventListener("click", function () {
  score = score + 1;              
  scoreText.textContent = score;  
});

// TODO 4: minusButton дарахад score нэгээр хасагдаж, хуудсан дээр харагдана
minusButton.addEventListener("click", function () {
    score = score - 1;
    scoreText.textContent = score;
});

// TODO 5: resetButton дарахад score 0 болж, хуудсан дээр харагдана
resetButton.addEventListener("click", function () {
score = 0
scoreText.textContent = score;
});


