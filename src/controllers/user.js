import {signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js'

export async function signInUser(req, res) {
    await signIn(req.body.get("email"), req.body.get("pwd"));
}

export async function addUser(req, res) {
    const response = await signUpCheckUniqueEmail(req.body.get("email"));
    if(!response[0]){
        await signUpInsertNewUser(req.body.get("firstName"), req.body.get("lastName"), req.body.get("email"), req.body.get("pwd"))
        res.body = req.body
        res.send("perfect")
    }else{
        res.send("Error: e-mail adress allready exists!!!")
    }
}

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}