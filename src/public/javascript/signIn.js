'use strict';

const cError = function error() {
    document.getElementById('error').innerHTML = 'Please check your login data!';
};

document.getElementById('buttonSignIn').addEventListener('click', cError);

// eslint-disable-next-line no-unused-vars
async function sendData() {
    const rawData = await fetch('http://localhost:8080/user/signin', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    });
    if (rawData.status === 200) {
        window.location.href = 'http://localhost:8080/mainPage';
    }
}
