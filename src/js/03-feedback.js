import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');
const form = document.querySelector('feedbackform');

const dataKey = 'feedback-form-state';