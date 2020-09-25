/* LCD Title */

// 8 * 12 digit divs + container div + text submission div + screen div + screen glass div = 100 divs

const ROWS = 8;
const COLUMNS = 12;

// Source: https://mil.ufl.edu/3744/docs/lcdmanual/characterset.html
const CHARSET = {
  " ": [0, 0, 0, 0, 0, 0, 0],
  "!": [0, 0, 0, 242, 0, 0, 0],
  '"': [0, 0, 224, 0, 224, 0, 0],
  "#": [0, 40, 254, 40, 254, 40, 0],
  $: [0, 36, 84, 254, 84, 72, 0],
  "%": [0, 196, 200, 16, 38, 70, 0],
  "&": [0, 108, 146, 170, 68, 10, 0],
  "'": [0, 160, 192, 0, 0, 0, 0],
  "(": [0, 0, 56, 68, 130, 0, 0],
  ")": [0, 0, 130, 68, 56, 0, 0],
  "*": [0, 40, 16, 124, 16, 40, 0],
  "+": [0, 16, 16, 124, 16, 16, 0],
  ",": [0, 0, 10, 12, 0, 0, 0],
  "-": [0, 16, 16, 16, 16, 16, 0],
  ".": [0, 0, 6, 6, 0, 0, 0],
  "/": [0, 4, 8, 16, 32, 64, 0],
  0: [0, 124, 138, 146, 162, 124, 0],
  1: [0, 0, 66, 254, 2, 0, 0],
  2: [0, 66, 134, 138, 146, 98, 0],
  3: [0, 132, 130, 162, 210, 140, 0],
  4: [0, 24, 40, 72, 254, 8, 0],
  5: [0, 228, 162, 162, 162, 156, 0],
  6: [0, 60, 82, 146, 146, 12, 0],
  7: [0, 128, 142, 144, 160, 192, 0],
  8: [0, 108, 146, 146, 146, 108, 0],
  9: [0, 96, 146, 146, 148, 120, 0],
  ":": [0, 0, 108, 108, 0, 0, 0],
  ";": [0, 0, 106, 108, 0, 0, 0],
  "<": [0, 16, 40, 68, 130, 0, 0],
  "=": [0, 40, 40, 40, 40, 40, 0],
  ">": [0, 0, 130, 68, 40, 16, 0],
  "?": [0, 64, 128, 138, 144, 96, 0],
  "@": [0, 76, 146, 158, 130, 124, 0],
  "`": [0, 0, 128, 64, 32, 0, 0],
  A: [0, 126, 136, 136, 136, 126, 0],
  B: [0, 254, 146, 146, 146, 108, 0],
  C: [0, 124, 130, 130, 130, 68, 0],
  D: [0, 254, 130, 130, 68, 56, 0],
  E: [0, 254, 146, 146, 146, 130, 0],
  F: [0, 254, 144, 144, 144, 128, 0],
  G: [0, 124, 130, 146, 146, 94, 0],
  H: [0, 254, 16, 16, 16, 254, 0],
  I: [0, 0, 130, 254, 130, 0, 0],
  J: [0, 4, 2, 130, 252, 128, 0],
  K: [0, 254, 16, 40, 68, 130, 0],
  L: [0, 254, 2, 2, 2, 2, 0],
  M: [0, 254, 64, 48, 64, 254, 0],
  N: [0, 254, 32, 16, 8, 254, 0],
  O: [0, 124, 130, 130, 130, 124, 0],
  P: [0, 254, 144, 144, 144, 96, 0],
  Q: [0, 124, 130, 138, 132, 122, 0],
  R: [0, 254, 144, 152, 148, 98, 0],
  S: [0, 98, 146, 146, 146, 140, 0],
  T: [0, 128, 128, 254, 128, 128, 0],
  U: [0, 252, 2, 2, 2, 252, 0],
  V: [0, 248, 4, 2, 4, 248, 0],
  W: [0, 252, 2, 28, 2, 252, 0],
  X: [0, 198, 40, 16, 40, 198, 0],
  Y: [0, 224, 16, 14, 16, 224, 0],
  Z: [0, 134, 138, 146, 162, 194, 0],
  a: [0, 4, 42, 42, 42, 30, 0],
  b: [0, 254, 18, 34, 34, 28, 0],
  c: [0, 28, 34, 34, 34, 4, 0],
  d: [0, 28, 34, 34, 18, 254, 0],
  e: [0, 28, 42, 42, 42, 24, 0],
  f: [0, 16, 126, 144, 128, 64, 0],
  g: [0, 48, 74, 74, 74, 124, 0],
  h: [0, 254, 16, 32, 32, 30, 0],
  i: [0, 0, 34, 190, 2, 0, 0],
  j: [0, 4, 2, 34, 188, 0, 0],
  k: [0, 254, 8, 20, 34, 0, 0],
  l: [0, 0, 0, 254, 0, 0, 0],
  m: [0, 62, 32, 24, 32, 30, 0],
  n: [0, 62, 16, 32, 32, 30, 0],
  o: [0, 28, 34, 34, 34, 28, 0],
  p: [0, 62, 40, 40, 40, 16, 0],
  q: [0, 16, 40, 40, 24, 62, 0],
  r: [0, 62, 16, 32, 32, 16, 0],
  s: [0, 18, 42, 42, 42, 4, 0],
  t: [0, 32, 252, 34, 2, 4, 0],
  u: [0, 60, 2, 2, 4, 62, 0],
  v: [0, 56, 4, 2, 4, 56, 0],
  w: [0, 60, 2, 12, 2, 60, 0],
  x: [0, 34, 20, 8, 20, 34, 0],
  y: [0, 48, 10, 10, 10, 60, 0],
  z: [0, 34, 38, 42, 50, 34, 0],
};

const textBox = document.getElementById("sentence");
const submitButton = document.getElementById("submit-btn");
const digits = Array.from(document.getElementsByClassName("digit")).sort(
  (a, b) => {
    let a_index = parseInt(a.dataset.row) + parseInt(a.dataset.column) * ROWS;
    let b_index = parseInt(b.dataset.row) + parseInt(b.dataset.column) * ROWS;
    if (a_index == b_index) return 0;
    else if (a_index < b_index) return -1;
    else return 1;
  }
);

let currentDrawing = undefined;

const getArrayFromText = function(text) {
  let chars = text.split("");
  let padding = Array(COLUMNS).fill(0);
  let array = [];
  array = array.concat(padding);
  for (let char of chars) {
    if (CHARSET[char]) array = array.concat(CHARSET[char]);
    else array = array.concat(CHARSET["?"]);
  }
  array.concat(padding);
  return array;
};

const getBinaryRowsFromNumber = function(rows, number) {
  rows.unshift(number % 2);
  if (Math.floor(number) > 1)
    return getBinaryRowsFromNumber(rows, Math.floor(number / 2));
  return rows;
};

const drawArray = function(array, columnOffset) {
  for (let i = 0; i < COLUMNS; i++) {
    let rows = getBinaryRowsFromNumber([], array[i + columnOffset]);
    if (rows.length < ROWS) rows.unshift(...Array(ROWS - rows.length).fill(0));
    for (let j = 0; j < ROWS; j++) {
      if (rows[j] == 1) digits[i * ROWS + j].classList.add("on");
      else digits[i * ROWS + j].classList.remove("on");
    }
  }
};

const setNewDrawing = function(text) {
  let lightArray = getArrayFromText(text);
  let columnOffset = 0;
  if (currentDrawing) clearInterval(currentDrawing);
  currentDrawing = setInterval(() => {
    columnOffset = columnOffset + 1;
    drawArray(lightArray, columnOffset % lightArray.length);
  }, 100);
};

submitButton.onclick = () => setNewDrawing(sentence.value);

textBox.value = "Welcome To Istemil Virtual Global Village";
setNewDrawing("Welcome To Istemil Virtual Global Village");


/* Footer */
var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
