import { getAllTasksByCategory, addTask, deleteTaskById, getLastTaskIdFromUser, changeCategory } from '../services/task.js';

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

export async function changeCategoryOfTask(req, res) {
    await changeCategory();
}



