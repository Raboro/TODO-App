import { getAllTasksByCategory, addTask, deleteTaskById, changePosition, changeCategoryAndPosition } from '../services/task.js';

export async function loadAllTasks(req, res) {
    await getAllTasksByCategory();
}

export async function addNewTask(req, res) {
    await addTask(req.body.category, req.body.title, req.body.content, req.body.dueDate, req.email);
}


export async function deleteTask(req, res) {
    await deleteTaskById();
}

export async function changePositionOfTask(req, res) {
    await changePosition();
}

export async function changeCategoryAndPositionOfTask(req, res) {
    await changeCategoryAndPosition();
}
