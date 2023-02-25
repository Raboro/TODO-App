import { executeQuery } from './database.js';

export async function getAllTasksByCategory(idCategory, user) {
    return await executeQuery(`SELECT * FROM tasks WHERE category = '${idCategory}' AND user = '${user}' ORDER BY tasks.dueDate ASC;`);
}

export async function addTask(category, title, content, dueDate, user) {
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return await executeQuery(`INSERT INTO tasks VALUES('NULL', '${category}', '${title}', '${content}', '${dueDate}', '${user}', '${timestamp}')`);
}

export async function deleteTaskById(id) {
    await executeQuery(`DELETE FROM tasks WHERE tasks.id = '${id}'`);
}

export async function getLastTaskIdFromUser(user) {
    return await executeQuery(`SELECT id FROM tasks WHERE user = '${user}' ORDER BY created DESC LIMIT 1`);
}

export async function changeCategory(id, category) {
    await executeQuery(`UPDATE tasks SET category = '${category}' WHERE tasks.id = '${id}'`);
}
