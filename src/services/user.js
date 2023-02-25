import { executeQuery } from './database.js';

export async function signIn(email, password) {
    return await executeQuery(`SELECT email FROM users WHERE email = '${email}' AND pwd = '${password}'`);
}

export async function signUpCheckUniqueEmail(email) {
    return await executeQuery(`SELECT email FROM users WHERE email = '${email}'`);
}

export async function signUpInsertNewUser(firstName, lastName, email, password) {
    await executeQuery(`INSERT INTO users VALUES('${firstName}', '${lastName}', '${email}', '${password}')`);
}
