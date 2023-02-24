import { signIn, signUpCheckUniqueEmail, signUpInsertNewUser } from '../services/user.js';
import dotenv from 'dotenv';
import path from 'path';
import jwt from 'jsonwebtoken';
import chalk from 'chalk';

dotenv.config({ path: path.join(process.cwd().replace('src\\controllers', '.env')) });

export async function signInUser(req, res) {
    const email = await signIn(req.body.email, req.body.password);
    if (email[0] !== undefined) {
        sign(req, res, email);
        return;
    }
    res.status(403).send();
}

function sign(req, res, email) {
    console.log(chalk.green('[SERVER]') + ' user:' + chalk.green(` ${req.body.email}`), 'is logging in');
    const token = jwt.sign(JSON.stringify(email), process.env.JWT_SECRET);
    res.cookie('token', token).status(200).send();
}

export async function addUser(req, res) {
    if (isNotAlreadyInUse(await signUpCheckUniqueEmail(req.body.email))) {
        await signUpInsertNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
        sign(req, res, [{ email: req.body.email }]);
    } else {
        res.status(403).send();
    }
}

const isNotAlreadyInUse = (email) => email.length === 0;

export async function logoutUser(req, res) {
    res.clearCookie('token');
}
