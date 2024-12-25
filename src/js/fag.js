import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('#faq-accordion', {
  duration: 500,
  showOne: true,
  showMultiple: true,
  collapse: true,
});
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(item => {
  item.addEventListener('click', event => {
    toggleAccordion(item);
  });
  const svg = item.querySelector('svg');
  svg.addEventListener('click', event => {
    event.stopPropagation();
    toggleAccordion(item);
  });
});
function toggleAccordion(item) {
  const body = item.nextElementSibling;
  document.querySelectorAll('.accordion-body').forEach(content => {
    if (content !== body) {
      content.classList.remove('visible');
      const siblingHeader = content.previousElementSibling;
      siblingHeader.querySelector('svg').style.transform = 'rotate(0deg)';
      siblingHeader.querySelector('svg').style.transitionDuration = '250ms';
    }
  });
  if (body.classList.contains('visible')) {
    body.classList.remove('visible');
    item.querySelector('svg').style.transform = 'rotate(0deg)';
    item.querySelector('svg').style.transitionDuration = '250ms';
  } else {
    item.querySelector('svg').style.transform = 'rotate(180deg)';
    item.querySelector('svg').style.transitionDuration = '250ms';
    setTimeout(() => {
      body.classList.add('visible');
    }, 250);
  }
}
