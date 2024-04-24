export function MyStorage() {
  const btn = document.querySelector('#save-btn');
  btn.addEventListener('click', () => {
    const storage = sessionStorage;
    const userName = document.getElementById('userNameInput').value;
    storage.setItem('userName', userName);
    location.href = 'index.html'
  });
}