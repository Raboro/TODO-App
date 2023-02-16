import { executeQuery } from './database.js';

async function signIn(email, password) {
    return executeQuery(`SELECT email FROM users WHERE email = ${email} AND pwd = ${password}`);
}

async function signUpCheckUniqueEmail(email) {
    return executeQuery(`SELECT email FROM users WHERE email = ${email}`);
}

async function signUpInsertNewUser(firstName, lastName, email, password) {
    return executeQuery(`INSERT INTO users VALUES(${firstName}, ${lastName}, ${email}, ${password})`);
}
