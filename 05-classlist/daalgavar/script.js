// 05-р хичээлийн даалгавар: Өнгөт хайрцаг
// style.css дотор .red, .blue, .round, .hidden class бэлэн байгаа

// TODO 1: СОНГО. Таван элементийг сонгож хувьсагчид хадгал
//   .box, .red-button, .blue-button, .round-button, .hide-button
let box = document.querySelector(".box");
let redbutton = document.querySelector(".red-button");
let bluebutton = document.querySelector(".blue-button");
let roundbutton = document.querySelector(".round-button");
let hide = document.querySelector(".hide-button");
// TODO 2: "Улаан" товч дарахад хайрцагт "red" class нэм, "blue" class-ийг хас
redbutton.addEventListener("click",function(){
    box.classList.add("red");
    box.classList.remove("blue");
})

// TODO 3: "Цэнхэр" товч дарахад хайрцагт "blue" class нэм, "red" class-ийг хас
bluebutton.addEventListener("click",function(){
    box.classList.add("blue");
    box.classList.remove("red");
})

// TODO 4: "Дугуй / Дөрвөлжин" товч дарахад "round" class-ийг сольж бай (toggle)
roundbutton.addEventListener("click",function(){
    box.classList.toggle("round");
})

// TODO 5: "Нуух / Харуулах" товч дарахад "hidden" class-ийг сольж бай (toggle)
hide.addEventListener("click",function(){
    box.classList.toggle("hidden");
})
