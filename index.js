//функция RGB
function hexFromRGB(r, g, b) {
  //массив цветов (шестнадцатиричная система)
  let hex = [r.toString(16), g.toString(16), b.toString(16)];
  $.each(hex, function (nr, val) {
    if (val.length === 1) {
      hex[nr] = "0" + val;
    }
  });
  return hex.join("").toUpperCase(); // объединение элементов массива в одну строку, вывод строки с верним регистром
}

//функция отрисовки окна
function refreshSwatch() {
  let red = $("#red").slider("value"), //получает значение рукоятки
    green = $("#green").slider("value"),
    blue = $("#blue").slider("value"),
    hex = hexFromRGB(red, green, blue);
  $("#swatch").css("background-color", "#" + hex); //вставляем комбинированный цвет в окно
}

//функция отрисовки текста
function refreshText() {
  let red = $("#scarlet").slider("value"),
    green = $("#verdant").slider("value"),
    blue = $("#cyan").slider("value"),
    hex = hexFromRGB(red, green, blue);
  $("#paragraph").css("color", "#" + hex); //меняем цвет текста
}

//зададим функцию, которая будет выполнена в момент готовности объектной модели документа
$(function () {
  $("#red, #green, #blue").slider({
    orientation: "horizontal", //ориентация слайдера
    range: "min", // определяет диапазон ползунка
    max: 255, //максимальное значение ползунка
    value: 127, //начальное значение ползунка, если он один
    slide: refreshSwatch, //событие, которое происходит на каждое движении мыши, при перетаскивании рукоятки ползунка
    change: refreshSwatch, //событие, которое происходит при изменении значения ползунка
  });
  $("#red").slider("value", 176); // устанавливает начально значение для рукоятки
  $("#green").slider("value", 206);
  $("#blue").slider("value", 239);

  $("#scarlet, #verdant, #cyan").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshText,
    change: refreshText,
  });
  $("#scarlet").slider("value", 30);
  $("#verdant").slider("value", 40);
  $("#cyan").slider("value", 50);
});

$("#button").click(function () {
  $("#block").css("display", "none");
  $("#text").css("display", "block");
});

$("#background").click(function () {
  $("#text").css("display", "none");
  $("#block").css("display", "block");
});
