import path from 'path';
import express from 'express';
import { authenticateToken } from '../middleware/jwtAuthentification.js';
const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src/public/html/mainPage.html'));
});

export default router;
