const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const form = document.querySelector('.form');
const modalTitle = document.querySelector('.modal-title');
const modalMessage = document.querySelector('.modal-text');
const inputEmail = document.getElementById('email');
const inputComments = document.getElementById('comments');
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close-btn');
const succes = document.querySelector('.succes');
const invalid = document.querySelector('.invalid');
import pathErrorIcon from '../img/icons.svg#icon-close';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

// entering data into input

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

// close modal

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

// verification of entered data

const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', function () {
  const pattern = new RegExp(inputEmail.getAttribute('pattern'));
  const value = inputEmail.value;

  if (pattern.test(value)) {
    console.log('Sucсes');
    inputEmail.style.borderBottom = '1px solid #3cbc81';
    succes.classList.remove('succes-is-hidden');
    invalid.classList.add('invalid-is-hidden');
  } else {
    console.log('Invalid');
    succes.classList.add('succes-is-hidden');
    invalid.classList.remove('invalid-is-hidden');
    inputEmail.style.borderBottom = '1px solid var(--red)';
  }
});

// izitoast

function showErrorToast(message) {
  iziToast.show({
    title: 'Error',
    titleColor: 'black',
    titleSize: '16px',
    titleLineHeight: '150%',
    message: message,
    messageColor: 'black',
    messageSize: '16px',
    messageLineHeight: '150%',
    backgroundColor: '#ef4040',
    theme: 'light',
    color: 'black',
    position: 'center',
    timeout: 100000,
  });
}

// API request

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const { email, comments } = event.target.elements;

  if (!comments.value.trim()) {
    showErrorToast('Сomment cannot be empty');
    return;
  }

  fetch(`${BASE_URL}/requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, comment: comments.value }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(function (data) {
      modal.classList.add('is-open');
      modalTitle.innerHTML = data.title;
      modalMessage.innerHTML = data.message;
    })

    .catch(error => {
      const errorMessage = error.message;
      showErrorToast(errorMessage);
    });
}
