// 02-р хичээлийн даалгавар: Миний танилцуулга

// TODO 1: Доорх хувьсагчдыг const-оор үүсгэ
//   myName        - чиний нэр (текст)
const name = "yaruu";
//   myAge         - чиний нас (тоо)
const myAge = 16;
//   myCity        - амьдардаг хот (текст)
const myCity ="ulaanbaatar";
//   favoriteFood  - дуртай хоол (текст)
const favoriteFood ="sushi";
//   isStudent     - сурагч мөн эсэх (true эсвэл false)
const isStudent=true;

// TODO 2: currentYear хувьсагчид энэ оныг хадгал.
//         Дараа нь birthYear хувьсагчид төрсөн оноо бодож гарга
//         (энэ оноос насаа хасна)
const currentYear=2026;
let birthYear = currentYear - myAge;


// TODO 3: introduction хувьсагчид ` ` болон ${ } ашиглан
//         өөрийгөө танилцуулсан өгүүлбэр үүсгэ.
//         Жишээ: Намайг Номин гэдэг. Би 12 настай, Улаанбаатар хотод амьдардаг.
const introduction = `Namaig ${name} gedeg`;


// TODO 4: introduction, birthYear, isStudent гурвыг консол дээр хэвлэ
console.log(introduction,birthYear,isStudent);

// TODO 5: Доорх мөрийн өмнөх // тэмдгийг арилгаж, танилцуулгаа хуудсан дээр харуул
document.querySelector(".intro").textContent = introduction;
