const BASE_URL = 'https://portfolio-js.b.goit.study/api/request';
const form = document.querySelector('.form');
const modalTitle = document.querySelector('.modal-title');
const modalMessage = document.querySelector('.modal-text');
const inputEmail = document.getElementById('email');
const inputComments = document.getElementById('comments');
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close-btn');
const succes = document.querySelector('.succes');
const invalid = document.querySelector('.invalid');
// import pathErrorIcon from '/img/icons.svg#error';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

inputEmail.addEventListener('input', () => {
  const maxLength = 30;
  if (inputEmail.value.length > maxLength) {
    inputEmail.value = inputEmail.value.substring(0, maxLength) + '...';
  }
});

inputComments.addEventListener('input', () => {
  const maxLength = 30;
  if (inputComments.value.length > maxLength) {
    inputComments.value = inputComments.value.substring(0, maxLength) + '...';
  }
});

closeButton.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('is-open');
}

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

window.onkeydown = function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', function () {
  const pattern = new RegExp(inputEmail.getAttribute('pattern'));
  const value = inputEmail.value;
  if (inputEmail.value === '') {
    invalid.classList.add('invalid-is-hidden');
    succes.classList.add('succes-is-hidden');
    inputEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.6)';
  } else if (pattern.test(value)) {
    inputEmail.style.borderBottom = '1px solid #3cbc81';
    succes.classList.remove('succes-is-hidden');
    invalid.classList.add('invalid-is-hidden');
  } else {
    succes.classList.add('succes-is-hidden');
    invalid.classList.remove('invalid-is-hidden');
    inputEmail.style.borderBottom = '1px solid var(--red)';
  }
});

// izitoast

function showErrorToast(message) {
  iziToast.show({
    title: 'Attention!',
    titleColor: 'black',
    titleSize: '16px',
    titleLineHeight: '150%',
    message: message,
    messageColor: 'black',
    messageSize: '16px',
    messageLineHeight: '150%',
    backgroundColor: 'white',
    theme: 'light',
    color: 'black',
    iconColor: 'white',
    position: 'center',
    timeout: 3000,
  });
}

// API request

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const { email, comments } = e.target.elements;

  if (!email.value.trim()) {
    showErrorToast('Email cannot be empty');
    return;
  }

  const data = {
    email: email.value.trim(),
    comment: comments.value.trim() || ' ',
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      modal.classList.add('is-open');
      modalTitle.innerHTML = data.title;
      modalMessage.innerHTML = data.message;
    })
    .catch(error => {
      showErrorToast(error.message);
    });
}
