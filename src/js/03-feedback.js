import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

let feedbackFormData = {
  email: '',
  message: '',
};

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

form.addEventListener('input', throttle(onFormChange, 2000));
form.addEventListener('submit', onFormSubmit);

getItemFromLS(LS_KEY);
uploadDataFromLS();

function onFormChange() {
  feedbackFormData.email = inputEmail.value;
  feedbackFormData.message = inputMessage.value;
  setItemToLs(LS_KEY, feedbackFormData);
}

function uploadDataFromLS() {
  const value = getItemFromLS(LS_KEY);

  if (!value) {
    return;
  }

  inputEmail.value = value.email;
  inputMessage.value = value.message;
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LS_KEY);
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
