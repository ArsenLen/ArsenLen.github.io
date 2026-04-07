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

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.hero-card');
    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const closedHeight = 110;

    function getOpenHeight(card) {
        const extra = card.querySelector('.hero-card-extra');
        const extraHeight = extra.scrollHeight;

        const topPadding = 16;
        const bottomPadding = 16;
        const safeSpaceForButton = 18;

        return Math.max(
            closedHeight,
            topPadding + extraHeight + bottomPadding + safeSpaceForButton
        );
    }

    function openCard(card) {
        const inner = card.querySelector('.hero-card-inner');
        const openHeight = getOpenHeight(card);

        card.classList.add('is-open');
        inner.style.height = openHeight + 'px';
    }

    function closeCard(card) {
        const inner = card.querySelector('.hero-card-inner');

        card.classList.remove('is-open');
        inner.style.height = closedHeight + 'px';
    }

    function closeAllExcept(currentCard) {
        cards.forEach(card => {
            if (card !== currentCard) {
                closeCard(card);
            }
        });
    }

    cards.forEach(card => {
        const button = card.querySelector('.hero-card-toggle');

        closeCard(card);

        if (!isTouchDevice) {
            card.addEventListener('mouseenter', function () {
                closeAllExcept(card);
                openCard(card);
            });

            card.addEventListener('mouseleave', function () {
                closeCard(card);
            });

            card.addEventListener('focusin', function () {
                closeAllExcept(card);
                openCard(card);
            });

            card.addEventListener('focusout', function (e) {
                if (!card.contains(e.relatedTarget)) {
                    closeCard(card);
                }
            });
        }

        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const isOpen = card.classList.contains('is-open');

            closeAllExcept(card);

            if (isOpen) {
                closeCard(card);
            } else {
                openCard(card);
            }
        });
    });

    document.addEventListener('click', function (e) {
        cards.forEach(card => {
            if (!card.contains(e.target)) {
                closeCard(card);
            }
        });
    });

    window.addEventListener('resize', function () {
        cards.forEach(card => {
            if (card.classList.contains('is-open')) {
                openCard(card);
            } else {
                closeCard(card);
            }
        });
    });
});