document.querySelector('.logo a').addEventListener('click', function (e) {
  e.preventDefault();
  const typewriter = document.querySelector('.typewriter');
  typewriter.style.animation = 'none';
  typewriter.offsetHeight;
  typewriter.style.animation = 'typing 1.4s steps(20, end) forwards, blinking 1.2s infinite';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Auto-close menu when a link is clicked
  document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
