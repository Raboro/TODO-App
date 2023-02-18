import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';


export async function signInUser(req, res) {
    res.send(JSON.stringify(await signIn(req.body.email, req.body.password)));
}

export async function addUser(req, res) {
    if (isNotAlreadyInUse(await signUpCheckUniqueEmail(req.body.email))) {
        console.log(await signUpInsertNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password))
    }
}

const isNotAlreadyInUse = (email) => email.length === 0;

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}
