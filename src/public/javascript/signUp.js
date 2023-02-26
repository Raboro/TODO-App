// eslint-disable-next-line no-unused-vars
async function signUp() {
    const formData = fetchForm();
    if (isFormValid(formData)) {
        delete formData.passwordRepeated;
        await addUser(formData);
    } else {
        document.getElementById('error').innerHTML = 'Your data is invalid';
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
    if (rawData.status === 200) {
        window.location.href = 'http://localhost:8080/mainPage';
    } else {
        document.getElementById('error').innerHTML = 'User data already in use';
    }
}
