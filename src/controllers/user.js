import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';

const users = [
    {
        email: 'test@test.com',
        password: 'test'
    }
];

export async function signInUser(req, res) {
    res.send(JSON.stringify(await signIn(req.body.email, req.body.password)));
}

export function addUser(req, res) {
    const user = {
        firstName: req.headers.firstname,
        lastName: req.headers.lastname,
        email: req.headers.email,
        password: req.headers.password
    };
    users.push(user);
    console.log(users);
    res.send('ok');
}

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}
