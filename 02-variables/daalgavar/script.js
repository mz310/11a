// 02-р хичээлийн даалгавар: Миний танилцуулга

// TODO 1: Доорх хувьсагчдыг const-оор үүсгэ
const name = "Hatnaa";
const age = 78;
const city = "UB";
const food = "Tums";
const isStudent = false;


// TODO 2: currentYear хувьсагчид энэ оныг хадгал.
//         Дараа нь birthYear хувьсагчид төрсөн оноо бодож гарга
//         (энэ оноос насаа хасна)
const currentYear = 2026;
const birthYear=currentYear - age;


// TODO 3: introduction хувьсагчид ` ` болон ${ } ашиглан
//         өөрийгөө танилцуулсан өгүүлбэр үүсгэ.
//         Жишээ: Намайг Номин гэдэг. Би 12 настай, Улаанбаатар хотод амьдардаг.
const introduction = `My name is ${name}, I am ${age} years old`;
    
       
// TODO 4: introduction, birthYear, isStudent гурвыг консол дээр хэвлэ
    console.log(introduction, birthYear, isStudent);

// TODO 5: Доорх мөрийн өмнөх // тэмдгийг арилгаж, танилцуулгаа хуудсан дээр харуул
document.querySelector(".intro").textContent = introduction;
