// #region анімація карток

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const cards = document.querySelectorAll('.li-cards');

    let currentIndex = 0;
    let isAnimating = false; // Флаг для предотвращения множества переключений

    const updateButtons = () => {
        const prevArrow = prevBtn.querySelector('.svg-icon-scrool');
        const nextArrow = nextBtn.querySelector('.svg-icon-scrool');

        prevBtn.classList.remove('active');
        nextBtn.classList.remove('active');

        if (currentIndex === 0) {
            prevBtn.disabled = true;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            prevArrow.style.stroke = '#3b3b3b';
        } else {
            prevBtn.disabled = false;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            prevArrow.style.stroke = '';
            prevBtn.classList.add('active');
        }

        if (currentIndex === cards.length - 1) {
            nextBtn.disabled = true;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            nextArrow.style.stroke = '#3b3b3b';
        } else {
            nextBtn.disabled = false;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            nextArrow.style.stroke = '';
            nextBtn.classList.add('active');
        }
    };

    const showNextCard = () => {
        if (isAnimating || currentIndex >= cards.length - 1) return; // Блокируем, если идет анимация
        isAnimating = true;

        cards[currentIndex].classList.add('slide-out-left');
        cards[currentIndex].classList.remove('active');

        setTimeout(() => {
            cards[currentIndex].classList.add('visually-hidden');
            cards[currentIndex].classList.remove('slide-out-left');

            currentIndex++;
            cards[currentIndex].classList.remove('visually-hidden');
            cards[currentIndex].classList.add('active', 'slide-in-right');

            setTimeout(() => {
                cards[currentIndex].classList.remove('slide-in-right');
                isAnimating = false; // Снимаем блокировку
                updateButtons();
            }, 600);
        }, 600);
    };

    const showPrevCard = () => {
        if (isAnimating || currentIndex <= 0) return; // Блокируем, если идет анимация
        isAnimating = true;

        cards[currentIndex].classList.add('slide-out-right');
        cards[currentIndex].classList.remove('active');

        setTimeout(() => {
            cards[currentIndex].classList.add('visually-hidden');
            cards[currentIndex].classList.remove('slide-out-right');

            currentIndex--;
            cards[currentIndex].classList.remove('visually-hidden');
            cards[currentIndex].classList.add('active', 'slide-in-left');

            setTimeout(() => {
                cards[currentIndex].classList.remove('slide-in-left');
                isAnimating = false; // Снимаем блокировку
                updateButtons();
            }, 600);
        }, 600);
    };

    nextBtn.addEventListener('click', showNextCard);
    prevBtn.addEventListener('click', showPrevCard);

    updateButtons();
});

// #endregion анімація карток

// #region анімація технічного списку

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".li-cards");
    let index = 0;

    function animateItems() {
        const activeCard = document.querySelector(".li-cards.active");

        if (activeCard) {
            const techItems = activeCard.querySelectorAll(".li-tech-list");
            techItems.forEach(item => item.classList.remove("active"));
            techItems[index].classList.add("active");
            index = (index + 1) % techItems.length;

            setTimeout(animateItems, 2500);
        }
    }

    animateItems();
});

// #endregion анімація технічного списку
