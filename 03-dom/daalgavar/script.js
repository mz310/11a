// 03-р хичээлийн даалгавар: Амьтны карт

// TODO 1: Гурван элементийг сонгож хувьсагчид хадгал
//   .animal-name   ->  nameText
let nameText = document.querySelector(".animal-name");
//   .animal-sound  ->  soundText
let soundText = document.querySelector(".animal-sound");
//   .animal-legs   ->  legsText
let legsText = document.querySelector(".animal-legs");



// TODO 2: Дуртай амьтныхаа мэдээллийг хувьсагчид хадгал
//   animalName  - амьтны нэр (текст)
let amitan = "bar";
//   animalSound - яаж дуугардаг (текст)
let sound = "aarr"
//   animalLegs  - хэдэн хөлтэй (тоо)
let legs = 4;



// TODO 3: Элементүүдийн текстийг хувьсагчаараа соль
//   Жишээ үр дүн:
//     Нохой
nameText.textContent = amitan;
//     Дуу: Хав хав
soundText.textContent = sound;
//     Хөл: 4
legsText.textContent = legs;

