const coverS = document.querySelector('.covers');
const lisT = document.querySelector('.container-covers');
const childrenOne = lisT.children[0];
const childrenTwo = lisT.children[1];
const childrenThree = lisT.children[2];

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const observer = new IntersectionObserver(handlerPagination, options);
observer.observe(coverS);

function handlerPagination(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      childrenOne.classList.add('container-covers-list-anim');
      childrenThree.classList.add('container-covers-list-anim');
      childrenTwo.classList.add('list-covers');
    }
  });
}
