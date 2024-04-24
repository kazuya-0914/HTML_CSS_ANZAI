import { API } from "./api.js";
const api = new API();

try {

  const btn = document.querySelector('#btn');
  const result = document.querySelector('#result');
  const apiKey = api.DeepLfreeAPI();
  const url = 'https://api-free.deepl.com/v2/translate';

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const message = document.forms.textForm.message.value;
    if (message.length > 100) {
      result.innerHTML = `<div class="text-danger">【エラー】テキストエリアの入力が100文字を超えました</div>`;
      return;
    }
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `auth_key=${apiKey}&text=${encodeURIComponent(message)}&target_lang=JA`
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = data.translations[0].text;
    })
    .catch(e => {
      result.innerHTML = `<div class="text-danger">【エラー】翻訳エラーが発生しました: ${e}</div>`;
    });
  });

} catch(e) {

  const deepLmsg = await DeepL(e.message);
  html += `<div class="text-danger">【エラー】${deepLmsg}</div>`;

}