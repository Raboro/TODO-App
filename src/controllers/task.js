import { getAllTasksByCategory, addTask, deleteTaskById, getIdOfLastAddedTask, changeCategory } from '../services/task.js';

export async function loadAllTasks(req, res) {
    const email = getEmail(req);
    const tasks = {
        todo: await getAllTasksByCategory(1, email),
        inProgress: await getAllTasksByCategory(2, email),
        done: await getAllTasksByCategory(3, email)
    };
    res.send(JSON.stringify(tasks));
}

const getEmail = (req) => {
    const rowData = JSON.stringify(req.email);
    return rowData.substring(11, rowData.length - 3);
};

export async function addNewTask(req, res) {
    const email = getEmail(req);
    await addTask(categorySwitch[req.body.category], req.body.title, req.body.content, req.body.dueDate, email);
    res.send(JSON.stringify(await getIdOfLastAddedTask(email)));
}

const categorySwitch = {
    TODO: 1,
    'IN PROGRESS': 2,
    DONE: 3
};

export async function deleteTask(req, res) {
    await deleteTaskById(req.body.id);
    res.send();
}

export async function changeCategoryOfTask(req, res) {
    await changeCategory(req.body.id, req.body.category);
    res.send();
}
