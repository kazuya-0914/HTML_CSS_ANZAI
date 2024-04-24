/*================================
 mdn.js
================================*/

// 現在の日時を表す Date オブジェクトを生成
const today = new Date(); 
// 年を取得
const year = today.getFullYear(); 
// 月を取得 (0-11 だから、1 を加えて12月に変換)
const month = today.getMonth() + 1; 
// 日を取得
const day = today.getDate(); 
// 年月日を出力
console.log(year + '年' + month + '月' + day + '日'); 
