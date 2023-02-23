import express from 'express';
import { loadAllTasks, addNewTask, deleteTask, changeCategoryOfTask } from '../controllers/task.js';
import { authenticateToken } from '../middleware/jwtAuthentification.js';
const router = express.Router();

router.get('/getAllTasks', authenticateToken, async(req, res) => {
    await loadAllTasks(req, res);
});

router.post('/addTask', authenticateToken, async(req, res) => {
    await addNewTask(req, res);
});

router.post('/deleteTask', authenticateToken, async(req, res) => {
    await deleteTask(req, res);
});

router.post('/changeCategoryOfTask', authenticateToken, async(req, res) => {
    await changeCategoryOfTask(req, res);
});

export default router;
