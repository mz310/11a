// 04-р хичээлийн даалгавар: Оноо тоологч

// TODO 1: СОНГО. Дөрвөн элементийг сонгож хувьсагчид хадгал
//   .score         ->  scoreText
let scoreText = document.querySelector(".score");
//   .plus-button   ->  plusButton
let plusButton = document.querySelector(".plus-button");
//   .minus-button  ->  minusButton
let minusButton = document.querySelector(".minus-button");
//   .reset-button  ->  resetButton
let resetButton = document.querySelector(".reset-button");


// TODO 2: score нэртэй хувьсагч үүсгэж 0 утга өг (let ашигла)
let score = 0;
// TODO 3: plusButton дарахад score нэгээр нэмэгдэж, хуудсан дээр харагдана
plusButton.addEventListener("click",function(){
    score = score + 1;
    scoreText.textContent = score;
})


// TODO 4: minusButton дарахад score нэгээр хасагдаж, хуудсан дээр харагдана
minusButton.addEventListener("click",function(){
    score = score - 1;
    scoreText.textContent = score;
})


// TODO 5: resetButton дарахад score 0 болж, хуудсан дээр харагдана
resetButton.addEventListener("click",function(){
    score = 0;
    scoreText.textContent = score;
})

