/// Градиєнти

import redMobileBg from '/img/hero/red/mb-bg.png';
import blueMobileBg from '/img/hero/blue/mb-blue.png';
import darkGreenMobileBg from '/img/hero/dark-green/mb-dark-green.png';
import orangeMobileBg from '/img/hero/orange/mb-orange.png';
import greenMobileBg from '/img/hero/green/mb-green.png';
import warmRedMobileBg from '/img/hero/warm-red/mb-warm-red.png';

import redTabBg from '/img/hero/red/tab-bg.png';
import blueTabBg from '/img/hero/blue/tab-blue.png';
import darkGreenTabBg from '/img/hero/dark-green/tab-dark-green.png';
import orangeTabBg from '/img/hero/orange/tab-orange.png';
import greenTabBg from '/img/hero/green/tab-green.png';
import warmRedTabBg from '/img/hero/warm-red/tab-warm-red.png';

import redDesktopBg from '/img/hero/red/bg.png';
import blueDesktopBg from '/img/hero/blue/blue.png';
import darkGreenDesktopBg from '/img/hero/dark-green/dark-green.png';
import orangeDesktopBg from '/img/hero/orange/orange.png';
import greenDesktopBg from '/img/hero/green/bg-green@2x.png';
import warmRedDesktopBg from '/img/hero/warm-red/warm-red.png';

import redMobileBg2x from '/img/hero/red/mb-bg@2x.png';
import blueMobileBg2x from '/img/hero/blue/mb-blue@2x.png';
import darkGreenMobileBg2x from '/img/hero/dark-green/mb-dark-green@2x.png';
import orangeMobileBg2x from '/img/hero/orange/mb-orange@2x.png';
import greenMobileBg2x from '/img/hero/green/mb-green@2x.png';
import warmRedMobileBg2x from '/img/hero/warm-red/mb-warm-red@2x.png';

import redTabBg2x from '/img/hero/red/tab-bg@2x.png';
import blueTabBg2x from '/img/hero/blue/tab-blue@2x.png';
import darkGreenTabBg2x from '/img/hero/dark-green/tab-dark-green@2x.png';
import orangeTabBg2x from '/img/hero/orange/tab-orange@2x.png';
import greenTabBg2x from '/img/hero/green/tab-green@2x.png';
import warmRedTabBg2x from '/img/hero/warm-red/tab-warm-red@2x.png';

import redDesktopBg2x from '/img/hero/red/bg@2x.png';
import blueDesktopBg2x from '/img/hero/blue/blue@2x.png';
import darkGreenDesktopBg2x from '/img/hero/dark-green/dark-green@2x.png';
import orangeDesktopBg2x from '/img/hero/orange/orange@2x.png';
import greenDesktopBg2x from '/img/hero/green/bg-green@2x.png';
import warmRedDesktopBg2x from '/img/hero/warm-red/warm-red@2x.png';

const gradients = [
  'linear-gradient(270deg, #1c1d20 49.68%, #69292d 67.73%, #ed3b44 100%)',
  'linear-gradient(270deg, #1c1d20 49.68%, #001958 67.73%, #0041e8 100%)',
  'linear-gradient(270deg, #1c1d20 49.68%, #596808 67.73%, rgba(198, 227, 39, 0.76) 100%)',
  'linear-gradient(270deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)',
  'linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%)',
  'linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%, #ff7f08 100%)'
];
// Масиви зображень
const mobileBackgroundImages = [
  redMobileBg,
  blueMobileBg,
  darkGreenMobileBg,
  orangeMobileBg,
  greenMobileBg,
  warmRedMobileBg,
];

const tabBackgroundImages = [
  redTabBg,
  blueTabBg,
  darkGreenTabBg,
  orangeTabBg,
  greenTabBg,
  warmRedTabBg,
];

const desktopBackgroundImages = [
  redDesktopBg,
  blueDesktopBg,
  darkGreenDesktopBg,
  orangeDesktopBg,
  greenDesktopBg,
  warmRedDesktopBg,
];

const highResMobileImages = [
  redMobileBg2x,
  blueMobileBg2x,
  darkGreenMobileBg2x,
  orangeMobileBg2x,
  greenMobileBg2x,
  warmRedMobileBg2x,
];

const highResTabImages = [
  redTabBg2x,
  blueTabBg2x,
  darkGreenTabBg2x,
  orangeTabBg2x,
  greenTabBg2x,
  warmRedTabBg2x,
];

const highResDesktopImages = [
  redDesktopBg2x,
  blueDesktopBg2x,
  darkGreenDesktopBg2x,
  orangeDesktopBg2x,
  greenDesktopBg2x,
  warmRedDesktopBg2x,
];

// // Зображення для різних пристроїв
// const mobileBackgroundImages = [
//   './img/hero/red/mb-bg.png',
//   './img/hero/blue/mb-blue.png',
//   './img/hero/dark-green/mb-dark-green.png',
//   './img/hero/orange/mb-orange.png',
//   './img/hero/green/mb-green.png',
//   './img/hero/warm-red/mb-warm-red.png'
// ];
// const tabBackgroundImages = [
//   './img/hero/red/tab-bg.png',
//   './img/hero/blue/tab-blue.png',
//   './img/hero/dark-green/tab-dark-green.png',
//   './img/hero/orange/tab-orange.png',
//   './img/hero/green/tab-green.png',
//   './img/hero/warm-red/tab-warm-red.png'
// ];
// const desktopBackgroundImages = [
//   './img/hero/red/bg.png',
//   './img/hero/blue/blue.png',
//   './img/hero/dark-green/dark-green.png',
//   './img/hero/orange/orange.png',
//   './img/hero/orange/bg.png',
//   './img/hero/warm-red/warm-red.png'
// ];

// // Масив для високої роздільності
// const highResMobileImages = [
//   './img/hero/red/mb-bg@2x.png',
//   './img/hero/blue/mb-blue@2x.png',
//   './img/hero/dark-green/mb-dark-green@2x.png',
//   './img/hero/orange/mb-orange@2x.png',
//   './img/hero/green/mb-green@2x.png',
//   './img/hero/warm-red/mb-warm-red@2x.png'
// ];
// const highResTabImages = [
//   './img/hero/red/tab-bg@2x.png',
//   './img/hero/blue/tab-blue@2x.png',
//   './img/hero/dark-green/tab-dark-green@2x.png',
//   './img/hero/orange/tab-orange@2x.png',
//   './img/hero/green/tab-green@2x.png',
//   './img/hero/warm-red/tab-warm-red@2x.png'
// ];
// const highResDesktopImages = [
//   './img/hero/red/bg@2x.png',
//   './img/hero/blue/blue@2x.png',
//   './img/hero/dark-green/dark-green@2x.png',
//   './img/hero/orange/orange@2x.png',
//   './img/hero/green/bg-green@2x.png',
//   './img/hero/warm-red/warm-red@2x.png'
// ];

// Синхронізовані функції для фону
function updateBackground(randomIndex) {
  const section = document.getElementById('hero');
  const width = window.innerWidth;
  const isHighResolution = window.devicePixelRatio >= 2;

  let imageArray, highResArray;

  if (width < 768) {
    imageArray = mobileBackgroundImages;
    highResArray = highResMobileImages;
  } else if (width < 1440) {
    imageArray = tabBackgroundImages;
    highResArray = highResTabImages;
  } else {
    imageArray = desktopBackgroundImages;
    highResArray = highResDesktopImages;
  }

  section.style.background = gradients[randomIndex];
  section.style.backgroundImage = `url(${isHighResolution ? highResArray[randomIndex] : imageArray[randomIndex]})`;
  section.style.backgroundPosition = 'left';
  section.style.backgroundRepeat = 'no-repeat';
  section.style.backgroundSize = 'contain';
}

// Логіка роботи з посиланнями
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".hero-item-link");
  const section = document.getElementById('hero');

  let currentIndex = 0;
  let interval;

  function activateHover() {
    links.forEach(link => link.classList.remove("hover"));
    links[currentIndex].classList.add("hover");

    updateBackground(currentIndex); // Оновлюємо фон одночасно
    currentIndex = (currentIndex + 1) % links.length;
  }
  updateBackground(0); // Початковий фон

  function startAutoHover() {
    interval = setInterval(activateHover, 2000);
  }

  function stopAutoHover() {
    clearInterval(interval);
    links.forEach(link => link.classList.remove("hover"));
  }

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      stopAutoHover();
      link.classList.add("hover");
    });

    link.addEventListener("mouseout", () => {
      link.classList.remove("hover");
      startAutoHover();
    });
  });

  // Ініціалізація
  activateHover(); // Початковий стан
  startAutoHover();
});



// !!
