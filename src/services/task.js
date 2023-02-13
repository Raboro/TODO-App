import {executeQuery} from './database.js';

async function getAllTasksByCategory(id) {
    return await executeQuery(`SELECT * FROM tasks WHERE category = ${id} ORDER BY position ASC`);
}

async function addTask(category, title, content, dueDate, user, position) {
    return await executeQuery(`INSERT INTO tasks VALUES(NULL, ${category}, ${title}, ${content}, ${dueDate}, ${user}, ${position}, NULL)`);
}

async function deleteTask(id) {
    return await executeQuery(`DELETE FROM tasks WHERE tasks.id = ${id}`);
}

async function changePositionOfTask(id, position) {
    return await executeQuery(`UPDATE tasks SET position = ${position} WHERE tasks.id = ${id}`)
}

async function changeCategoryAndPosition(id, position, category) {
    return await executeQuery(`UPDATE tasks SET category = ${category}, position = ${position} WHERE task.id = ${id}`);
}

async function updateTask(id, category, title, content, dueDate, position) {
    return await executeQuery(`UPDATE tasks SET category = ${category}, title = ${title}, content = ${content}, dueDate = ${dueDate}, position = ${position} WHERE id = ${id}`);
}