import connections from '../config/database.js';

async function signIn(email, pwd){
return connections.query("SELECT email FROM users WHERE email = ? AND pwd = ?",email, pwd);
}

async function signUpCheckUniqueEmail(email){
    return connections.query("SELECT email FROM users WHERE email = ?", email);
}

async function signUpInsertNewUser(firstName, lastName, email, pwd){
    return connections.query("INSERT INTO users VALUES(?,?,?,?)",firstName, lastName, email, pwd);
}

console.log(connections);