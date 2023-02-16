import {signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js'

const users = [];

export async function signInUser(req, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.headers["email"] && users[i].password == req.headers["password"]) {
            res.send("yes sir")
            return;
        }

    }
    res.send("no sir")
}

export function addUser(req, res) {
    const user = {
        "firstName": req.headers["firstname"],
        "lastName": req.headers["lastname"],
        "email": req.headers["email"],
        "password": req.headers["password"]
    }
    users.push(user);
    console.log(users)
    res.send("ok");
}

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}