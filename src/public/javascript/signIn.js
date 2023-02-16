'use strict';


const cError = function error() {
    document.getElementById('error').innerHTML = 'Please check your login data!';
};

document.getElementById('buttonSignIn').addEventListener('click', cError);

function sendData() {
    fetch(`http://localhost:8080/user/signin`, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email: document.getElementById("email").value, 
            password: document.getElementById("password").value
        })
        }).then(res => {return res.json()})
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
}