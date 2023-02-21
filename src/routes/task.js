import express from 'express';
import { loadAllTasks, addNewTask, deleteTask, changePositionOfTask, changeCategoryAndPositionOfTask, updateTask } from '../controllers/task.js';
const router = express.Router();

router.post('/loadAllTasks', async(req, res) => {
    await loadAllTasks(req, res);
});

router.post('/addTask', async(req, res) => {
    await addNewTask(req, res);
});

router.post('/deleteTask', async(req, res) => {
    await deleteTask(req, res);
});

router.post('/changePositionOfTask', async(req, res) => {
    await changePositionOfTask(req, res);
});

router.post('/changeCategoryAndPositionOfTask', async(req, res) => {
    await changeCategoryAndPositionOfTask(req, res);
});

router.post('/updateTask', async(req, res) => {
    await updateTask(req, res);
});

export default router;
