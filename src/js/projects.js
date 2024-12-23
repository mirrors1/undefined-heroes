// #region анімація карток

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const cards = document.querySelectorAll('.li-cards');

    let currentIndex = 0;

    const updateButtons = () => {
        const prevArrow = prevBtn.querySelector('.svg-icon-scrool');
        const nextArrow = nextBtn.querySelector('.svg-icon-scrool');

        // Прибираємо клас .active з обох кнопок
        prevBtn.classList.remove('active');
        nextBtn.classList.remove('active');

        // Для лівої кнопки (prev)
        if (currentIndex === 0) {
            prevBtn.disabled = true;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            prevArrow.style.stroke = '#3b3b3b'; // Встановлюємо колір стрілки для неактивної лівої кнопки
        } else {
            prevBtn.disabled = false;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            prevArrow.style.stroke = ''; // Відновлюємо колір стрілки на звичайний для лівої кнопки
            prevBtn.classList.add('active');
        }

        // Для правої кнопки (next)
        if (currentIndex === cards.length - 1) {
            nextBtn.disabled = true;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            nextArrow.style.stroke = '#3b3b3b'; // Встановлюємо колір стрілки для неактивної правої кнопки
        } else {
            nextBtn.disabled = false;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            nextArrow.style.stroke = ''; // Відновлюємо колір стрілки на звичайний для правої кнопки
            nextBtn.classList.add('active');
        }
    };

    const showNextCard = () => {
        if (currentIndex < cards.length - 1) {
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
                }, 600);

                updateButtons();
            }, 600);
        }
    };

    const showPrevCard = () => {
        if (currentIndex > 0) {
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
                }, 600);

                updateButtons();
            }, 600);
        }
    };

    nextBtn.addEventListener('click', showNextCard);
    prevBtn.addEventListener('click', showPrevCard);

    updateButtons();
});

// #endregion анімація карток

// #region анімація технічного списку

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".li-cards"); // Усі картки
  let index = 0;

  // Функція для анімації елементів
  function animateItems() {
    // Знайдемо активну картку
    const activeCard = document.querySelector(".li-cards.active");

    // Якщо активна картка знайдена, виконуємо анімацію на елементах всередині неї
    if (activeCard) {
      const techItems = activeCard.querySelectorAll(".li-tech-list"); // Елементи всередині активної картки

      // Скидаємо клас 'active' у всіх елементів
      techItems.forEach(item => item.classList.remove("active"));

      // Активуємо поточний елемент
      techItems[index].classList.add("active");

      // Переходимо до наступного елементу
      index = (index + 1) % techItems.length; // Циклічний перехід

      // Задаємо інтервал між активаціями (1.5 секунди)
      setTimeout(animateItems, 2000); // 2 секунди між елементами
    }
  }

  // Запускаємо цикл анімації
  animateItems();
});

// #endregion анімація технічного списку 