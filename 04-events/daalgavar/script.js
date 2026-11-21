// 04-р хичээлийн даалгавар: Оноо тоологч

// TODO 1: СОНГО. Дөрвөн элементийг сонгож хувьсагчид хадгал
//   .score         ->  scoreText
//   .plus-button   ->  plusButton
//   .minus-button  ->  minusButton
//   .reset-button  ->  resetButton
const plusButton = document.querySelector('.plus-button');
const scoreText = document.querySelector('.score');
const minusButton = document.querySelector(',imus-button');

// TODO 2: score нэртэй хувьсагч үүсгэж 0 утга өг (let ашигла)
let score = 0;

// TODO 3: plusButton дарахад score нэгээр нэмэгдэж, хуудсан дээр харагдана
plusButton.addEventListener("click", function () {
    score += 1;
    scoreText.textContent = score;
});


// TODO 4: minusButton дарахад score нэгээр хасагдаж, хуудсан дээр харагдана
minusButton.addEventListener("click", function () {
    score -= 1;

// TODO 5: resetButton дарахад score 0 болж, хуудсан дээр харагдана

