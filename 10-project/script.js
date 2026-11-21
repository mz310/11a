// 10-р хичээл: Төгсгөлийн төсөл "Миний хийх зүйлс"
// TODO-г дарааллаар нь хий. Алхам бүрийн дараа хуудсаа шалга.

// Эхний ажлууд. Хүсвэл өөрчилж болно
const startTasks = ["Гэрийн даалгавар хийх", "Ном унших", "Өрөөгөө цэвэрлэх"];

// ===== TODO 1: СОНГО =====
// Долоон элементийг сонгож хувьсагчид хадгал
//   .page          ->  page
//   .task-input    ->  taskInput
//   .add-button    ->  addButton
//   .task-list     ->  taskList
//   .count         ->  countText
//   .warning       ->  warningText
//   .theme-button  ->  themeButton


// ===== TODO 2: Тоолуур =====
// updateCount нэртэй функц бич.
//   countText-ийн текстийг "Нийт: ..." болгоно.
//   Ажлын тоог ингэж авна:  taskList.children.length


// ===== TODO 3: Ажил нэмэх =====
// addTask нэртэй, text гэсэн нэг параметртэй функц бич.
//
//   a) <li> элемент үүсгэж item хувьсагчид хадгал, "task" class нэм
//
//   b) <span> элемент үүсгэж taskText хувьсагчид хадгал,
//      текстийг нь text болго, "task-text" class нэм
//
//   c) <button> элемент үүсгэж deleteButton хувьсагчид хадгал,
//      текстийг нь "Устгах" болго, "delete-button" class нэм
//
//   d) taskText дээр дарахад taskText-ийн "done" class солигдоно (toggle)
//
//   e) deleteButton дээр дарахад item устана:  item.remove();
//      Дараа нь updateCount-ийг дууд
//
//   f) taskText, deleteButton хоёрыг item дотор хий (append),
//      item-ийг taskList дотор хий (append)
//
//   g) updateCount-ийг дууд


// ===== TODO 4: Эхний ажлууд =====
// startTasks массивын ажил бүрийн хувьд addTask-ийг дууд (for...of давталт)


// ===== TODO 5: Нэмэх товч =====
// addButton дарахад:
//   a) taskInput-ийн утгыг уншиж хувьсагчид хадгал
//   b) утга хоосон ("") бол warningText-ээс "hidden" class-ийг хас
//   c) үгүй бол:
//        - warningText-т "hidden" class нэм
//        - addTask-ийг тэр утгаар дууд
//        - taskInput-ийг цэвэрлэ


// ===== TODO 6: Харанхуй горим =====
// themeButton дарахад:
//   a) page-ийн "dark-mode" class-ийг сольж бай (toggle)
//   b) page "dark-mode" class-тай бол товчны текст "Гэрэлтэй горим",
//      үгүй бол "Харанхуй горим" болно (classList.contains ашигла)

