import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd().replace('src\\middleware', '.env')) });

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    try {
        req.email = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.clearCookie('token');
        return res.redirect('/signIn');
    }
};
