const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav_links');
const closeMenu = document.getElementById('close_menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;

  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('show');

  document.body.classList.add('no-scroll', menuOpen);
});

closeMenu.addEventListener('click', () => {
    menuOpen;
  
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('show');

    document.body.classList.remove('no-scroll', menuOpen);
})