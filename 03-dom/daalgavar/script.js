// 03-р хичээлийн даалгавар: Амьтны карт

// TODO 1: Гурван элементийг сонгож хувьсагчид хадгал
//   .animal-name   ->  nameText
//   .animal-sound  ->  soundText
//   .animal-legs   ->  legsText
const nametext = document.querySelector(".animal-name");
const soundtext = document.querySelector(".animal-sound");
const legstext = document.querySelector(".animal-legs");


// TODO 2: Дуртай амьтныхаа мэдээллийг хувьсагчид хадгал
//   animalName  - амьтны нэр (текст)
//   animalSound - яаж дуугардаг (текст)
//   animalLegs  - хэдэн хөлтэй (тоо)
const animalName = "lion";
const animalSound = "roarrrr";
const animalLegs = 4;


// TODO 3: Элементүүдийн текстийг хувьсагчаараа соль
//   Жишээ үр дүн:
//     Нохой
//     Дуу: Хав хав
//     Хөл: 4
nametext.textContent = animalName;
soundtext.textContent = animalSound;
legstext.textContent = animalLegs;

