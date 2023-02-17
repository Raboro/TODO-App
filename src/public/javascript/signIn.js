'use strict';

const cError = function error() {
    document.getElementById('error').innerHTML = 'Please check your login data!';
};

document.getElementById('buttonSignIn').addEventListener('click', cError);

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
    console.log(await rawData.json());
}
