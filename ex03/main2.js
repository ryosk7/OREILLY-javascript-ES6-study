const sam1 = {
  name: 'Sam',
  age: 4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);

console.log(sam1.name===sam2.name);
console.log(sam1.age===sam2.age);
console.log(sam1===sam2);

const タマ = {
  名前: 'タマ',
  分類: {
    目: 'ネコ目',
    科: 'ネコ科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};

console.log(タマ);

sam1.speak = function() { return "Meow!"; };
console.log(sam1.speak());

delete タマ.分類;
console.log(タマ);

const s = "hello";
const s2 = s.toUpperCase();
console.log(s2);

s.rating = 3;
console.log(s.rating);

const a = [1,2,'c', 4, 5];
a[2] = 3;
console.log(a);
console.log(a.length);
