/*================================
 holiday.js
================================*/

const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//for文
// i が配列の祭日要素を超えるまでループが続く
//1になってると「成人の日」からになった0にする

for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

//num 変数が holidays 配列の長さ未満である間、
//配列の各要素をコンソールに出力し続ける
// const num = holidays.length;
// while (num < holidays.length) {
//   console.log(num);
//   num++;
// } 
console.log('--- while ---');
// 配列の範囲を超えないように制限する？
// const i = 0;
let i = 0;
while (i < holidays.length) {
  console.log(holidays[i]);
  i++;
}