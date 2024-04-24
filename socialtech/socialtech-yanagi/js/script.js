const menuSp = document.getElementById('menu-sp');
const navSp = document.getElementById('nav-sp');
const closeSp = document.querySelectorAll('#nav-sp > a, #close');

menuSp.addEventListener('click', () => {
  navSp.style.display = 'block';
});

closeSp.forEach(e => {
  e.addEventListener('click', () => {
    navSp.style.display = 'none';
  });
})