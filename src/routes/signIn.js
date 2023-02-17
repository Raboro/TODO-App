import path from 'path';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src/public/html/signIn.html'));
});

export default router;
