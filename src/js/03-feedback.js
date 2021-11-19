// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email
// і message, у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде 
// рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
//  заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з 
// полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.Для цього додай
//  до проекту і використовуй бібліотеку lodash.throttle.


const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');

const FORM_FIELDS_KEY = 'feedback-form-state';
const email = formRef.elements.email;
const message = formRef.elements.message;

const onFormInput = e => {
    const userData = {
        userMail: email.value,
        userMessage: message.value,
    };
    localStorage.setItem(FORM_FIELDS_KEY, JSON.stringify(userData));
};

const throttled = throttle(onFormInput, 500);

const storageValuesLogger = () => {
    const values = localStorage.getItem(FORM_FIELDS_KEY);
    const parsedValues = JSON.parse(values);
    const storageObj = {
        email: parsedValues.userMail,
        message: parsedValues.userMessage,
    };
    console.log(storageObj);
};

const onFormSubmit = e => {

    e.preventDefault();
    try {
        console.log(localStorage.getItem(FORM_FIELDS_KEY));
        storageValuesLogger();
        e.currentTarget.reset();
        localStorage.removeItem(FORM_FIELDS_KEY);
    } catch (error) {
        return alert('всі поля повинні бути заповнені!')
    }

};

const populateTextMessage = () => {
    const currentInputValues = localStorage.getItem(FORM_FIELDS_KEY);
    if (currentInputValues) {
        const parsedInputValues = JSON.parse(currentInputValues);

        email.value = parsedInputValues.userMail;
        message.value = parsedInputValues.userMessage;
    }
};

populateTextMessage();

formRef.addEventListener('input', throttled);
formRef.addEventListener('submit', onFormSubmit);
