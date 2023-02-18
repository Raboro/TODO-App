'use strict';
const cError = function error() {
    document.getElementById('error').innerHTML = 'Your E-Mail Adress already exist.';
};

const cSendData = function sendData() {

};

async function signUp() {
    const password = document.getElementById('password').value;
    const repeatedPassword =document.getElementById('passwordRepeated').value ;
    if (password !== repeatedPassword) {
        return;
    }
    const rawData = await fetch('http://localhost:8080/user/signUp', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: password
        })
    });
    console.log(await rawData.json());
}

document.getElementById('buttonSignUp').addEventListener('click', cSendData);
