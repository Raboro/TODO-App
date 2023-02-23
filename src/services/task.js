import { executeQuery } from './database.js';


export async function getAllTasksByCategory(idCategory, user) {
    return await executeQuery(`SELECT * FROM tasks WHERE category = '${idCategory}' AND user = '${user}' ORDER BY tasks.dueDate ASC;`);
}

export async function addTask(category, title, content, dueDate, user) {
    return await executeQuery(`INSERT INTO tasks VALUES('NULL', '${category}', '${title}', '${content}', '${dueDate}', '${user}', 'NULL')`);
}

export async function deleteTaskById(id) {
    return await executeQuery(`DELETE FROM tasks WHERE tasks.id = '${id}'`);
}

export async function getLastTaskIdFromUser(user) {
    return await executeQuery(`SELECT id FROM tasks WHERE user = '${user}' ORDER BY created DESC LIMIT 1`);
}

export async function changeCategory(id,category) {
    return await executeQuery(`UPDATE tasks SET category = '${category}' WHERE task.id = '${id}'`);
}


