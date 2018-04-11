// --------------------------------------------
// terminalで、
//    $ node main.js
// と打つと実行される
// --------------------------------------------

let currentTempC = 16;
console.log(currentTempC);
currentTempC = 22.5;
console.log(currentTempC);

let tako ="🐙", ika = "イカ";
console.log(tako, ika);

// 具体的な文字列を表す定数には、太文字とアンダースコア(_)を組み合わせた名前をつけるのが慣習となっている。
const ROOM_TEMP_C = 26.5, MAX_TEMP_C = 36;
console.log(ROOM_TEMP_C, MAX_TEMP_C);

const room1 = "会議室A"
console.log(room1);
let currentRoom = room1;
console.log(currentRoom);

const x = 0.1 + 0.2;
console.log(x);

let count = 10;
console.log(count);
const blue = 0x0000ff;
console.log(blue);
const umask = 0o0022;
console.log(umask);

const e = -1.6e-19;
console.log(e);
const inf = Infinity;
console.log(inf);

console.log(1/0);

let currentTemp = 19.5;
const message = "現在の温度は" + currentTemp + "℃です。";
console.log(message);

// 上の処理をテンプレートリテラルを使って書き直す

let currentTemp2 = 19.5;
// ！！！注！！！ バッククォート(``)で囲むこと！！！
const message2 = `現在の温度は${currentTemp2}℃です。`;
console.log(message2);
