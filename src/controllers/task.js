import { getAllTasksByCategory, addTask, deleteTaskById, changePosition, changeCategoryAndPosition, getLastTaskIdFromUser } from '../services/task.js';

export async function loadAllTasks(req, res) {
    await getAllTasksByCategory();
}

export async function addNewTask(req, res) {
    await addTask();
    await getLastTaskIdFromUser();
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
