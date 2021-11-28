// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email
// і message, у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде 
// рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
//  заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з 
// полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.Для цього додай
//  до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

// const storage_Key = 'feedback-form-state';

const formRef = document.querySelector('form');
const email = formRef.elements.email;
const message = formRef.elements.message;

const FORM_FIELDS_KEY = 'feedback-form-state';
// const FORM_MESSAGE_KEY = 'feedback-message-state'



const onInput = e => {
    const formData = {
        mail: email.value,
        message: message.value,
    };
    localStorage.setItem(FORM_FIELDS_KEY, JSON.stringify(formData));
};

// const throttled = throttle(onFormInput, 500);

const getFormLS = () => {
    const parsedData = JSON.parse(localStorage.getItem(FORM_FIELDS_KEY));

    if (!parsedData) return;

    email.value = parsedData.mail,
        message.value = parsedData.message;
};
getFormLS();

const onSubmit = e => {
    e.preventDefault();

    if (!email.value || !message.value) {
        return alert('всі поля повинні бути заповнені!');
    }

    console.log({ email: email.value, message: message.value });

    formRef.reset();
    localStorage.removeItem(FORM_FIELDS_KEY);
};

formRef.addEventListener('input', throttle(onInput, 500));

formRef.addEventListener('submit', onSubmit);
