'use strict';
// eslint-disable-next-line no-unused-vars
const cError = function error() {
    document.getElementById('error').innerHTML = 'Your E-Mail Address already exist.';
};

const cSendData = function sendData() {

};

// eslint-disable-next-line no-unused-vars
async function signUp() {
    const formData = fetchForm();
    if (isFormValid(formData)) {
        delete formData.passwordRepeated;
        await addUser(formData);
    }
}

function fetchForm() {
    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        passwordRepeated: document.getElementById('passwordRepeated').value
    };
}

function isFormValid(formData) {
    return areValuesValid(formData) && arePasswordsEqual(formData);
}

const areValuesValid = (formData) => {
    for (const key in formData) {
        if (isInvalidValue(formData[key])) { return false; }
    }
    return true;
};

const isInvalidValue = (value) => value === '';

const arePasswordsEqual = (formData) => formData.password === formData.passwordRepeated;

async function addUser(userData) {
    document.getElementById('error').innerHTML = '';
    const rawData = await fetch('http://localhost:8080/user/signUp', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    console.log(await rawData.json());
    document.getElementById('error').innerHTML = 'Please check your login data!';
}

document.getElementById('buttonSignUp').addEventListener('click', cSendData);
