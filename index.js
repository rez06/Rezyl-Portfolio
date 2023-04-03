function changeNavbarColorOnScroll() {
  let navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", changeNavbarColorOnScroll);

function scrollToSection(e) {
  e.preventDefault();
  const section = document.querySelector('.main-container');
  section.scrollIntoView({ behavior: 'smooth' });
}

const scrollBtn = document.querySelector('#scrollBtn');
scrollBtn.addEventListener('click', scrollToSection);
