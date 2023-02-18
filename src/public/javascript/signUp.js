'use strict';
const cError = function error() {
    document.getElementById('error').innerHTML = 'Your E-Mail Address already exist.';
};

const cSendData = function sendData() {

};

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
    const rawData = await fetch('http://localhost:8080/user/signUp', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    console.log(await rawData.json());
}

document.getElementById('buttonSignUp').addEventListener('click', cSendData);
