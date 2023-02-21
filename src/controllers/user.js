import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';
import dotenv from 'dotenv';
import path from 'path';
import jwt from 'jsonwebtoken';
import chalk from 'chalk';

dotenv.config({ path: path.join(process.cwd().replace('src\\controllers', '.env')) });

export async function signInUser(req, res) {
    const email = await signIn(req.body.email, req.body.password);
    if (email[0] !== undefined) {
        console.log(chalk.green('[SERVER]') + ' user:' + chalk.green(` ${req.body.email}`), 'is logging in');
        const token = jwt.sign(JSON.stringify(email), process.env.JWT_SECRET);
        res.cookie('token', token);
        res.send();
    } else {
        res.send(JSON.stringify('Wrong user data'));
    }
}

export async function addUser(req, res) {
    if (isNotAlreadyInUse(await signUpCheckUniqueEmail(req.body.email))) {
        console.log(await signUpInsertNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password));
    } else {
        res.send(JSON.stringify('response: User could not be added'));
    }
}

const isNotAlreadyInUse = (email) => email.length === 0;

export async function logoutUser(req, res) {
    req.session.destroy();
    res.redirect('/login');
}
