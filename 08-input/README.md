# 08. Хэрэглэгчээс утга авах

## Зорилго

- `<input>`-д бичсэн утгыг JS-ээр унших
- Текстийг тоо болгох
- Хоосон эсэхийг шалгах

## Input-ийн утгыг унших

```html
<input class="name-input" type="text" placeholder="Нэрээ бич">
```

```js
const nameInput = document.querySelector(".name-input");

const userName = nameInput.value;
```

`div`, `p`, `h1`-ийн текстийг `textContent`-оор авдаг бол `input`-ийн утгыг **`value`**-аар авна.

## Утгыг хэзээ унших вэ?

`value`-г товч дарагдах үед, өөрөөр хэлбэл `{ }` **дотор** уншина. Гадна нь уншвал хуудас нээгдэх үеийн хоосон утгыг авна.

```js
greetButton.addEventListener("click", function () {
  const userName = nameInput.value;   // яг одоо бичсэн утга
  greeting.textContent = `Сайн уу, ${userName}!`;
});
```

## Input үргэлж текст буцаана

`type="number"` байсан ч `value` нь **текст**. Текстийг `+`-ээр нэмэхэд залгагдана:

```js
"5" + "3"                   // "53"
Number("5") + Number("3")   // 8
```

Тооцоо хийхийн өмнө `Number()`-оор тоо болго:

```js
const first = Number(firstInput.value);
```

## Хоосон эсэхийг шалгах

```js
if (nameInput.value === "") {
  greeting.textContent = "Эхлээд нэрээ бичээрэй!";
} else {
  greeting.textContent = `Сайн уу, ${nameInput.value}!`;
}
```

`""` бол хоосон текст.

## Input-ийг цэвэрлэх

```js
nameInput.value = "";
```

## Түгээмэл алдаа

| Алдаа | Засвар |
|---|---|
| `nameInput.textContent` | Input дээр `value` хэрэглэнэ |
| 5 + 3 = 53 гарах | `Number()` дутуу |
| Үргэлж хоосон утга гарах | `value`-г `{ }`-ийн гадна уншсан |
| `NaN` гарах | Тоо биш зүйлийг `Number()`-т өгсөн. `NaN` нь "тоо биш" гэсэн үг |

## Даалгавар: Тооны машин

`daalgavar/` хавтсанд хоёр input, дөрвөн үйлдлийн товч байгаа.

1. `calculate` функц бич. `operation` параметрээс хамаарч нэмэх, хасах, үржих, хуваах үйлдэл хийнэ.
2. Аль нэг input хоосон бол улаан анхааруулга харуулна.
3. Дөрвөн товчоо функцтэйгээ холбо.

## Өөрийгөө шалга

- `textContent` болон `value` хоёрыг хэзээ хэрэглэх вэ?
- `Number()` яагаад хэрэгтэй вэ?
