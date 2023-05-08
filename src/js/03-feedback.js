import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('.feedback-form input');
const form = document.querySelector('.feedback-form');

const DATA_KEY = 'feedback-form-state';
form.addEventListener(inputEmail, throttle(inputData, 500));
form.addEventListener('submit', submitForm);

let formData = JSON.parse(localStorage.getItem(DATA_KEY)) || {};
const { email, message } = form.elements;
pageUpdate();

function inputData(e) {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(DATA_KEY, JSON.stringify(formData));
}

function pageUpdate() {
    if (formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
}
} 

function submitForm(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(DATA_KEY);
    e.currentTarget.reset();
    formData = {};
}