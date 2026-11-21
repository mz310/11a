# JavaScript анхан шат: HTML + CSS + JS

HTML, CSS-ийн суурь мэдлэгтэй (`div`, `class`, `button`) сурагчдад зориулсан JavaScript-ийн анхан шатны хичээл.

**Гол зорилго:** HTML, CSS, JavaScript гурвыг хослуулан, хэрэглэгчийн үйлдэлд хариу өгдөг **динамик** веб хуудас хийж сурах.

---

## 1. Гурван хэл, гурван үүрэг

| Хэл | Үүрэг | Хариулдаг асуулт | Жишээ |
|---|---|---|---|
| HTML | Бүтэц | Хуудсан дээр **юу** байх вэ? | гарчиг, товч, хайрцаг |
| CSS | Загвар | **Ямар** харагдах вэ? | өнгө, хэмжээ, зай |
| JavaScript | Үйлдэл | **Юу хийх** вэ? | товч дарахад өнгө солигдох |

Байшинтай зүйрлэвэл HTML бол хана, хаалга. CSS бол будаг, чимэглэл. JavaScript бол гэрлийн унтраалга, хаалганы хонх юм. JavaScript-гүй хуудас зураг шиг хөдөлгөөнгүй байдаг.

## 2. Гурав яаж холбогддог вэ

Гурван файл нэг хавтсанд байна. `index.html` нь нөгөө хоёрыгоо дуудна:

```html
<head>
  <link rel="stylesheet" href="style.css">   <!-- CSS-ийг холбоно -->
</head>
<body>
  ...
  <script src="script.js"></script>          <!-- JS-ийг холбоно -->
</body>
```

Гурвыг хооронд нь холбодог гүүр бол **class**:

```html
<!-- index.html: элементэд class өгнө -->
<div class="lamp"></div>
```

```css
/* style.css: class-аар нь загвар өгнө */
.lamp    { background-color: gray; }
.lamp-on { background-color: yellow; }
```

```js
// script.js: class-аар нь олоод, class-ийг нь сольж загварыг өөрчилнө
const lamp = document.querySelector(".lamp");
lamp.classList.add("lamp-on");
```

| Холбоо | HTML талд | Нөгөө талд |
|---|---|---|
| HTML ↔ CSS | `class="lamp"` | `.lamp { }` |
| HTML ↔ JS | `class="lamp"` | `document.querySelector(".lamp")` |
| JS ↔ CSS | — | `classList.add("lamp-on")` ↔ `.lamp-on { }` |

## 3. Алтан дүрэм: Сонго → Сонс → Өөрчил

Динамик хуудас бараг бүгд энэ гурван алхмаар ажилладаг:

```js
// 1. СОНГО: ажиллах элементүүдээ олно
const button = document.querySelector(".hello-button");
const message = document.querySelector(".message");

// 2. СОНС: хэрэглэгчийн үйлдлийг хүлээнэ
button.addEventListener("click", function () {
  // 3. ӨӨРЧИЛ: текст эсвэл загварыг өөрчилнө
  message.textContent = "Сайн уу!";
  message.classList.add("highlight");
});
```

Хичээл бүр энэ дүрмийн нэг хэсгийг гүнзгийрүүлнэ.

---

## 4. Хичээлийн агуулга

| № | Хавтас | Сэдэв | Шинэ ойлголт | Даалгавар |
|---|---|---|---|---|
| 01 | [`01-hello-js`](01-hello-js) | Сайн уу, JavaScript | `<script>` холбох, консол, `console.log()`, тайлбар | Файлуудаа өөрөө холбох |
| 02 | [`02-variables`](02-variables) | Хувьсагч | `let`, `const`, текст/тоо/boolean, `+ - * /`, `` `${ }` `` | Өөрийн танилцуулга |
| 03 | [`03-dom`](03-dom) | HTML-ийг JS-ээр өөрчлөх | `document.querySelector()`, `textContent` | Амьтны карт |
| 04 | [`04-events`](04-events) | Товч дарах | `addEventListener("click", ...)`, тоолуур | Оноо тоологч |
| 05 | [`05-classlist`](05-classlist) | CSS-ийг JS-ээр удирдах | `classList.add / remove / toggle`, `style` | Өнгөт хайрцаг |
| 06 | [`06-if-else`](06-if-else) | Нөхцөл | `if / else if / else`, `> < >= <= === !==` | Батарей |
| 07 | [`07-functions`](07-functions) | Функц | функц зарлах, дуудах, параметр, `return` | Шоо хаях |
| 08 | [`08-input`](08-input) | Хэрэглэгчээс утга авах | `input.value`, `Number()`, хоосон эсэхийг шалгах | Тооны машин |
| 09 | [`09-array-loop`](09-array-loop) | Массив ба давталт | `[]`, `length`, `push()`, `for...of`, `createElement()` | Киноны жагсаалт |
| 10 | [`10-project`](10-project) | Төгсгөлийн төсөл | Бүх мэдлэгээ нэгтгэх | Хийх зүйлсийн жагсаалт |

Хичээлүүд дарааллаараа уялдаатай: 01–02 нь JS-ийн суурь, 03–05 нь HTML, CSS-тэй холбох гол хэсэг, 06–09 нь хуудсыг "ухаантай" болгох хэрэгсэл, 10 нь бүгдийг нэгтгэнэ.

## 5. Хавтасны бүтэц

```
js-anhan-shat/
├── README.md              ← энэ файл
├── 01-hello-js/
│   ├── README.md          ← хичээлийн тайлбар
│   ├── index.html         ← ажилладаг жишээ
│   ├── style.css
│   ├── script.js
│   └── daalgavar/         ← сурагчийн гүйцээх даалгавар
│       ├── index.html
│       ├── style.css
│       └── script.js      ← TODO-г дагаж бичнэ
├── 02-variables/
│   └── ...
└── 10-project/            ← төгсгөлийн төсөл
```

## 6. Яаж ажиллуулах вэ

1. [VS Code](https://code.visualstudio.com/) суулгана.
2. VS Code дээр **Live Server** өргөтгөл суулгана.
3. Хичээлийн хавтсыг нээж, `index.html` дээр баруун товч → **Open with Live Server**.
4. Хөтөч дээр **F12** дарж **Console** цонхыг нээнэ. Mac дээр `Cmd + Option + J`.

Live Server байхгүй бол `index.html` файлыг хоёр товшиж хөтчөөр нээхэд болно. Код өөрчилсний дараа хуудсаа дахин ачаална (F5).

## 7. Хичээл бүрийг яаж үзэх вэ

1. Хичээлийн `README.md`-г уншина.
2. Жишээг (`index.html`) ажиллуулж, юу болж байгааг ажиглана.
3. `script.js`-ийг мөр мөрөөр нь уншиж, утгуудыг өөрчилж туршина.
4. `daalgavar/` хавтсыг нээж, `TODO` бүрийг дарааллаар нь гүйцээнэ.
5. README-ийн төгсгөлд байгаа асуултуудад хариулж өөрийгөө шалгана.

## 8. Товч лавлах

```js
// Хувьсагч
let count = 0;                 // өөрчлөгдөх утга
const city = "Улаанбаатар";    // өөрчлөгдөхгүй утга

// Элемент сонгох
const title = document.querySelector(".title");

// Текст өөрчлөх
title.textContent = "Шинэ гарчиг";

// CSS class нэмэх, хасах, солих
title.classList.add("big");
title.classList.remove("big");
title.classList.toggle("big");

// Товч дарахыг сонсох
button.addEventListener("click", function () {
  // дарагдах үед ажиллах код
});

// Нөхцөл
if (count >= 10) {
  // үнэн бол
} else {
  // худал бол
}

// Функц
function sayHello(userName) {
  return "Сайн уу, " + userName;
}

// Input-ийн утга
const text = input.value;
const number = Number(input.value);

// Массив ба давталт
const fruits = ["Алим", "Банана"];
fruits.push("Жүрж");
for (const fruit of fruits) {
  console.log(fruit);
}

// Шинэ элемент үүсгэх
const item = document.createElement("li");
item.textContent = "Шинэ мөр";
list.append(item);
```

## 9. Алдаа гарвал

Юу ч болохгүй байвал эхлээд **Console**-оо хар. Улаан мессеж алдаа хаана байгааг хэлж өгдөг.

| Консолын мессеж | Ихэвчлэн юу болсон бэ |
|---|---|
| `Cannot read properties of null` | `querySelector` элементээ олоогүй. class-ийн нэр буруу эсвэл цэг (`.`) орхигдсон |
| `... is not defined` | Хувьсагчийн нэрийг буруу бичсэн эсвэл зарлаагүй |
| `Unexpected token` | Хаалт `( ) { }` эсвэл хашилт `" "` дутуу |
| `Assignment to constant variable` | `const` хувьсагчийн утгыг өөрчлөх гэсэн. `let` болго |
| Юу ч гарахгүй, алдаа ч байхгүй | `script.js` холбогдоогүй эсвэл файлаа хадгалаагүй (Ctrl + S) |

## 10. Кодын дүрэм

- Хувьсагч, функцийн нэрийг англиар, `camelCase`-ээр бичнэ: `scoreText`, `addButton`.
- class-ийн нэрийг жижиг үсгээр, зураасаар холбоно: `plus-button`, `task-list`.
- Мөрийн төгсгөлд цэг таслал `;` тавина.
- Догол мөрийг 2 хоосон зайгаар авна.
- Юу хийж байгаагаа тайлбараар (`//`) монголоор бичиж болно.
