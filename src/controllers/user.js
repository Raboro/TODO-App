import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';


export async function signInUser(req, res) {
    res.send(JSON.stringify(await signIn(req.body.email, req.body.password)));
}

export async function addUser(req, res) {
    const data = await signUpCheckUniqueEmail(req.body.email);
    if (data.length === 0) {
        console.log(await signUpInsertNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password))
    }
}

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}
