/*=====================================
event.js
=====================================*/

// btnというidを持つHTML要素を取得し、定数に代入する
let addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('text').innerText = 'ボタンをクリックしました。';
    }, 2000);
});


