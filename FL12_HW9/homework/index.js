function convert() {
  let convertedArray = [];
  for (let item of [...arguments]) {
    convertedArray.push(typeof item === 'string' ? +item : '' + item);
  }
  return convertedArray;
}

function executeforEach(arr, callback) {
  for (let item of arr) {
    callback(item);
  }
}

function mapArray(arr, callback) {
  let mapArr = [];
  for (let item of arr) {
    mapArr.push(callback(+item));
  }
  return mapArr;
}

function filterArray(arr, callback) {
  let filterArr = [];
  for (let item of arr) {
    if (callback(item)) {
      filterArr.push(item);
    }
  }
  return filterArr;
}

function flipOver(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

function makeListFromRange(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let rangeOfArray = [];
  for (let i = min; i <= max; i++) {
    rangeOfArray.push(i);
  }
  return rangeOfArray;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
  let arrOfKeys = [];
  for (let item of arr) {
    arrOfKeys.push(item[key]);
  }
  return arrOfKeys;
}

const THIRTY = 30;

function substitute(arr) {
  return mapArray(arr, function(el) {
    if (el < THIRTY) {
      return '*';
    } else {
      return el;
    }
  });
}

const YEAR = 2019;
const DAY = 2;
const date = new Date(YEAR, 0, DAY);

function getPastDay(date, day) {
  let newday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return newday.getDate(newday.setDate(date.getDate() - day));
}

function formatDate(date) {
  let newdate = new Date(Date.parse(date));
  return `${newdate.getFullYear()}/${newdate.getMonth() +
    1}/${newdate.getDate()} ${newdate.getHours()}:${newdate.getMinutes()}`;
}
