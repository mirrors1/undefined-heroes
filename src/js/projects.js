document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector('.btn-prev');
  const nextBtn = document.querySelector('.btn-next');
  const cards = document.querySelectorAll('.li-cards');
  
  let currentIndex = 0; 

  const updateButtons = () => {
    const prevArrow = prevBtn.querySelector('.svg-icon-scrool');
    const nextArrow = nextBtn.querySelector('.svg-icon-scrool');
  
    if (currentIndex === 0) {
      prevBtn.disabled = true;
      prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
      prevArrow.classList.add('inactive-arrow'); 
    } else {
      prevBtn.disabled = false;
      prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
      prevArrow.classList.remove('inactive-arrow'); 
    }

    if (currentIndex === cards.length - 1) {
      nextBtn.disabled = true;
      nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)'; 
      nextArrow.classList.add('inactive-arrow');
    } else {
      nextBtn.disabled = false;
      nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
      nextArrow.classList.remove('inactive-arrow');
    }
  };

  const showNextCard = () => {
    if (currentIndex < cards.length - 1) {
      cards[currentIndex].classList.remove('active');
      cards[currentIndex].classList.add('visually-hidden'); 
      currentIndex++;
      cards[currentIndex].classList.remove('visually-hidden');
      cards[currentIndex].classList.add('active');
      updateButtons(); 
    }
  };

  const showPrevCard = () => {
    if (currentIndex > 0) {
      cards[currentIndex].classList.remove('active');
      cards[currentIndex].classList.add('visually-hidden'); 
      currentIndex--;
      cards[currentIndex].classList.remove('visually-hidden');
      cards[currentIndex].classList.add('active'); 
      updateButtons(); 
    }
  };

  nextBtn.addEventListener('click', showNextCard);

  prevBtn.addEventListener('click', showPrevCard);

  updateButtons();
});
