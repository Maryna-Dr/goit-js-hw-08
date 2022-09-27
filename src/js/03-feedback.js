import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LocalStorage_KEY = 'feedback-form-state';

let feedbackFormData = {
  email: '',
  message: '',
};

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

form.addEventListener('input', throttle(onFormChange, 2000));
form.addEventListener('submit', onFormSubmit);

getItemFromLS(LocalStorage_KEY);
uploadDataFromLS();

function onFormChange() {
  feedbackFormData.email = inputEmail.value;
  feedbackFormData.message = inputMessage.value;
  setItemToLs(LocalStorage_KEY, feedbackFormData);
}

function uploadDataFromLS() {
  const value = getItemFromLS(LocalStorage_KEY);

  if (!value) {
    return;
  }

  inputEmail.value = value.email;
  inputMessage.value = value.message;
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LocalStorage_KEY);
  console.log(feedbackFormData);

  form.reset();
}

function setItemToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItemFromLS(key) {
  let savedValue = localStorage.getItem(key);
  try {
    savedValue = JSON.parse(savedValue);
  } catch {
    console.log('Error');
  }
  return savedValue;
}
