// 02-р хичээлийн даалгавар: Миний танилцуулга

// TODO 1: Доорх хувьсагчдыг const-оор үүсгэ
//   myName        - чиний нэр (текст)
//   myAge         - чиний нас (тоо)
//   myCity        - амьдардаг хот (текст)
//   favoriteFood  - дуртай хоол (текст)
//   isStudent     - сурагч мөн эсэх (true эсвэл false)
const myName = "Намударь";
const myAge = 16;
const myCity = "Улаанбаатар";
const favoriteFood = "spaghetti";
const isStudent = true;


// TODO 2: currentYear хувьсагчид энэ оныг хадгал.
//         Дараа нь birthYear хувьсагчид төрсөн оноо бодож гарга
//         (энэ оноос насаа хасна)
const currentYear = 2026;
let birthYear = currentYear - myAge;


// TODO 3: introduction хувьсагчид ` ` болон ${ } ашиглан
//         өөрийгөө танилцуулсан өгүүлбэр үүсгэ.
//         Жишээ: Намайг Номин гэдэг. Би 12 настай, Улаанбаатар хотод амьдардаг.
const introduction = `Намайг ${myName} гэдэг. Би ${myAge} настай, ${myCity} хотод амьдардаг.`


// TODO 4: introduction, birthYear, isStudent гурвыг консол дээр хэвлэ
console.log(introduction, birthYear, isStudent);


// TODO 5: Доорх мөрийн өмнөх // тэмдгийг арилгаж, танилцуулгаа хуудсан дээр харуул
document.querySelector(".intro").textContent = introduction;

