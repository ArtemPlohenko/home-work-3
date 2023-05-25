/** @format */

// ---- 1 ---- //
const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(e) {
  return Array.from(new Set(e));
  // new Set (об'єкт) але він записує значення. Додає значення (якщо значення вже існує то інше таке саме не додає) унікальні елементи
}

const arr2 = compact(arr);
console.log(arr2);

// ---- 2 ---- //
function createArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let arrNew = createArray(2, 9);
console.log(arrNew);

// ---- 3 ---- //
function createNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    let value = "";
    for (let j = 0; j < i; j++) {
      value += i;
    }
    console.log(+value);
  }
}

createNumbers(1, 6);

// ---- 4 ---- //
function randArray(k) {
  const array = [];
  let min = Math.min(1);
  let max = Math.max(500);

  for (var i = 0; i < k; i++) {
    let randomInt = Math.floor(Math.random() * (max - min)) + min;

    // let randomInt = Math.floor(Math.random() * 500) + 1;
    array.push(randomInt);
  }
  return array;
}

var result = randArray(5);
console.log(result);

// ---- 5 ---- //
const arrBig = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];

function newArrays(e) {
  const srtArr = [];
  const numArr = [];

  const numberArray = e.flat();

  for (let i = 0; i < numberArray.length; i++) {
    const el = numberArray[i];
    if (typeof el === "number") {
      numArr.push(el);
    } else if (typeof el === "string") {
      srtArr.push(el);
    }
  }

  return [numArr, srtArr];
}

const [numArr, srtArr] = newArrays(arrBig);
// console.log(numArr);
// console.log(srtArr);
console.log([numArr, srtArr]);

// ---- 6 ---- //
// @everyone, в 3й темі випадково продублювались задачі 6 та 7, можна повторно їх не робити) Замість них тримайте ще одну задачку:

let currentDate = new Date();
function currentDateFunc(e) {
  // let res;

  let hours = e.getHours();
  let minutes = e.getMinutes();

  if (minutes <= 9) {
    return (minutes = "0" + minutes);
  }

  return hours;
  // return (res = `${hours}:${minutes}`);
}
const periodOfTime = currentDateFunc(currentDate);
console.log(periodOfTime);

// 1)
if (periodOfTime >= 23 && periodOfTime < 5) {
  console.log("Доброї ночі");
} else if (periodOfTime < 11) {
  console.log("Доброго ранку");
} else if (periodOfTime < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора”");
}

// or

// 2)
var currentTime = new Date();
var currentHour = currentTime.getHours();

let night = currentHour >= 23 && currentHour < 5;
let morning = currentHour >= 5 && currentHour < 11;
let day = currentHour >= 11 && currentHour < 17;
let evening = currentHour >= 17 && currentHour < 23;

switch (true) {
  case night:
    console.log("Доброї ночі");
    break;
  case morning:
    console.log("Доброго ранку");
    break;
  case day:
    console.log("Доброго дня");
    break;
  case evening:
    console.log("Доброго вечора");
    break;
}

// ⭐⭐⭐

const tom = create("pass_for_Tom");

function create(password) {
  return function (some) {
    if (some == password) {
      return true;
    } else {
      return false;
    }
  };
}

console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));
