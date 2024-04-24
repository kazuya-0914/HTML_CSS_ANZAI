import { fetchWeatherData } from "./weather.js";
import { DeepL } from "./translation.js";

let html = '';
const domCode = document.getElementById('dom-code');

// ----- 教材コード

function divide(x, y) {
  if( y === 0) {
    throw new Error('分母が「0」だと割り算できません');
  }
  return x / y;
}

try {
  let result = divide(10, 0);
  html += result;
} catch(e) {
  //const deepLname = await DeepL(e.name);
  //const deepLmsg = await DeepL(e.message);
  html += `<div class="text-danger">【エラー】${e.message}</div>`;
}

// -----

domCode.innerHTML = html;
fetchWeatherData();

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  location.reload();
});