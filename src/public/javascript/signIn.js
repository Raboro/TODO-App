'use strict';
// eslint-disable-next-line no-unused-vars
async function sendData() {
    document.getElementById('error').innerHTML = '';
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
    } else {
        document.getElementById('error').innerHTML = 'Please check your login data!';
    }
}
