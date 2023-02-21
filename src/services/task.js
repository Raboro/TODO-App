import { executeQuery } from './database.js';

export async function getAllTasksByCategory(idCategory, user) {
    return await executeQuery(`SELECT * FROM tasks WHERE category = '${idCategory}' AND user = '${user}' ORDER BY position ASC`);
}

export async function addTask(category, title, content, dueDate, user, position) {
    return await executeQuery(`INSERT INTO tasks VALUES('NULL', '${category}', '${title}', '${content}', '${dueDate}', '${user}', '${position}', 'NULL')`);
}

export async function deleteTaskById(id) {
    return await executeQuery(`DELETE FROM tasks WHERE tasks.id = '${id}'`);
}

export async function changePosition(id, position) {
    return await executeQuery(`UPDATE tasks SET position = '${position}' WHERE tasks.id = '${id}'`);
}

export async function changeCategoryAndPosition(id, position, category) {
    return await executeQuery(`UPDATE tasks SET category = '${category}', position = '${position}' WHERE task.id = '${id}'`);
}

export async function update(id, category, title, content, dueDate, position) {
    return await executeQuery(`UPDATE tasks SET category = '${category}', title = '${title}', content = '${content}', dueDate = '${dueDate}', position = '${position}' WHERE id = '${id}'`);
}
