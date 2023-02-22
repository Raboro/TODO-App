import express from 'express';
import { loadAllTasks, addNewTask, deleteTask, changePositionOfTask, changeCategoryAndPositionOfTask } from '../controllers/task.js';
import { authenticateToken } from '../middleware/jwtAuthentification.js';
const router = express.Router();

router.get('/getAllTasksByCategory', authenticateToken, async(req, res) => {
    await loadAllTasks(req, res);
});

router.post('/addTask', authenticateToken, async(req, res) => {
    await addNewTask(req, res);
});

router.post('/deleteTask', authenticateToken, async(req, res) => {
    await deleteTask(req, res);
});

router.post('/changePositionOfTask', authenticateToken, async(req, res) => {
    await changePositionOfTask(req, res);
});

router.post('/changeCategoryAndPositionOfTask', authenticateToken, async(req, res) => {
    await changeCategoryAndPositionOfTask(req, res);
});

export default router;
