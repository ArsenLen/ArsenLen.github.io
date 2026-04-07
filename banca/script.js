cardsAccordion()
headerSticky()
burgerMenu()

function cardsAccordion() {
const cards = document.querySelectorAll('.hero-card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
    card.classList.add('is-open');
    });

    card.addEventListener('mouseleave', () => {
    card.classList.remove('is-open');
    });
});
}

function headerSticky() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}

function burgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  burgerBtn.classList.toggle('is-active');
  burgerBtn.setAttribute('aria-expanded', isOpen);
});
}