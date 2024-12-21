import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('#faq-accordion', {
  duration: 400,
  showOne: true,
  showMultiple: true,
  collapse: true,
});
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(item => {
  const svg = item.querySelector('svg');
  svg.addEventListener('click', event => {
    toggleAccordion(item);
  });
});
function toggleAccordion(item) {
  const body = item.nextElementSibling;
  document.querySelectorAll('.accordion-body').forEach(content => {
    if (content !== body) {
      content.style.display = 'none';
      content.style.visibility = 'hidden';
      const siblingHeader = content.previousElementSibling;
      siblingHeader.querySelector('svg').style.transform = 'rotate(0deg)';
    }
  });
  if (body.style.display === 'block') {
    body.style.display = 'none';
    body.style.visibility = 'hidden';
    item.querySelector('svg').style.transform = 'rotate(0deg)';
  } else {
    body.style.display = 'block';
    body.style.visibility = 'visible';
    item.querySelector('svg').style.transform = 'rotate(180deg)';
  }
}
