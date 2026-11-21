// 03-р хичээлийн даалгавар: Амьтны карт

// TODO 1: Гурван элементийг сонгож хувьсагчид хадгал
//   .animal-name   ->  nameText
//   .animal-sound  ->  soundText
//   .animal-legs   ->  legsText
const nameText = document.querySelector(".animal-name");
const soundText = document.querySelector(".animal-sound");
const legsText = document.querySelector(".animal-legs");
// TODO 2: Дуртай амьтныхаа мэдээллийг хувьсагчид хадгал
//   animalName  - амьтны нэр (текст)
//   animalSound - яаж дуугардаг (текст)
//   animalLegs  - хэдэн хөлтэй (тоо)
const animalName = "dog";
const animalSound = "how hhow ahaha";
const animalLegs = 4;
// TODO 3: Элементүүдийн текстийг хувьсагчаараа соль
//   Жишээ үр дүн:
//     Нохой
//     Дуу: Хав хав
//     Хөл: 4
nameText.textContent = animalName;
soundText.textContent = `Duu: ${animalSound}`;
legsText.textContent = `Hul: ${animalLegs}`;