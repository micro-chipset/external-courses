"use strict";

function randomIntegerNumberRange(min, max) {
  // получаем случайное число от 0 до max-min, а прибавляем min и получаем нужный диапазон
  // Метод Math.round() возвращает число, округлённое к ближайшему целому.
  let random = min + Math.random() * (max - min);
  return Math.round(random);
}

module.exports = randomIntegerNumberRange;
