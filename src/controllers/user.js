import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';

const users = [
    {
        email: 'test@test.com',
        password: 'test'
    }
];

export async function signInUser(req, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email && users[i].password === req.body.password) {
            res.send(JSON.stringify('response: yes sir'));
            return;
        }
    }
    res.send(JSON.stringify('response : no sir'));
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
