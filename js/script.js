window.addEventListener('load', windowLoad);
const html = document.documentElement;
const header = document.querySelector('header');
const headerLogo = header.querySelector('.header__logo');
const headerMenu = header.querySelector('.menu');
if (headerMenu) headerMenu.style.insetBlockStart = `${headerLogo.offsetHeight}` / 16 + 'rem';

function windowLoad() {
  html.classList.add('loaded');
}
document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    html.classList.toggle('menu-open');
  } else if (!targetElement.closest('.menu') && html.classList.contains('menu-open')) {
    html.classList.remove('menu-open');
  }

  if (!targetElement.closest('.menu__list') && document.querySelector('.menu__has-submenu.show')) {
    const openedItem = document.querySelector('.menu__has-submenu.show');
    if (openedItem) openedItem.classList.remove('show');
  }

  if (targetElement.closest('.menu__dropdown')) {
    const dropdown = targetElement.closest('.menu__dropdown');
    const currentItem = dropdown.closest('.menu__has-submenu');
    const isOpen = currentItem.classList.contains('show');

    document
      .querySelectorAll('.menu__has-submenu')
      .forEach((item) => item.classList.remove('show'));

    if (!isOpen) currentItem.classList.add('show');
  }
}

if (document.querySelector('.feedback__swiper')) {
  var swiper = new Swiper('.feedback__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1500,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1400: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
    navigation: {
      nextEl: '.feedback__arrow-next',
      prevEl: '.feedback__arrow-prev',
    },
  });
}
window.addEventListener('resize', (e) => {
  if (headerMenu) headerMenu.style.insetBlockStart = `${headerLogo.offsetHeight}` / 16 + 'rem';
});
