import { getAllTasksByCategory, addTask, deleteTaskById, getLastTaskIdFromUser, changeCategory } from '../services/task.js';

export async function loadAllTasks(req, res) {
    await getAllTasksByCategory();
}

export async function addNewTask(req, res) {
    const email = JSON.stringify(req.email).substring(11);
    console.log(email.substring(0, email.length - 3));
    const category = categorySwitch[req.body.category];
    await addTask(category, req.body.title, req.body.content, req.body.dueDate, email.substring(0, email.length - 3));
    console.log(await getLastTaskIdFromUser());
}

const categorySwitch = {
    TODO: 1,
    'IN PROGRESS': 2,
    DONE: 3
};

export async function deleteTask(req, res) {
    await deleteTaskById();
}

export async function changeCategoryOfTask(req, res) {
    await changeCategory();
}
