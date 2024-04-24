export function MyCookie() {
  const btn = document.querySelector('#save-btn');
  btn.addEventListener('click', () => {
    const userName = document.getElementById('userNameInput').value;
    document.cookie = 'name=' + encodeURIComponent(userName) + '; max-age=3600';
    document.cookie = 'age=30; max-age=60 * 60';
    location.href = 'index.html'
  });
}