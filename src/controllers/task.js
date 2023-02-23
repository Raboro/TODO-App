import { getAllTasksByCategory, addTask, deleteTaskById, getLastTaskIdFromUser, changeCategory } from '../services/task.js';

export async function loadAllTasks(req, res) {
    const emailRawData = JSON.stringify(req.email);
    const email = emailRawData.substring(11, emailRawData.length - 3);
    const tasks = {
        todo: await getAllTasksByCategory(1, email),
        inProgress: await getAllTasksByCategory(1, email),
        done: await getAllTasksByCategory(1, email)
    };
    res.send(JSON.stringify(tasks));
}

export async function addNewTask(req, res) {
    const emailRawData = JSON.stringify(req.email);
    const email = emailRawData.substring(11, emailRawData.length - 3);
    await addTask(categorySwitch[req.body.category], req.body.title, req.body.content, req.body.dueDate, email);
    res.send(JSON.stringify(await getLastTaskIdFromUser(email)));
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
