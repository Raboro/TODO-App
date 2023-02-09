import connections from '../config/database.js';

console.log(connections);

async function getTasksFromSelectedCategory(id){
    return await connections.query("SELECT * FROM tasks WHERE category = ? ORDER BY position ASC",id);
}

async function newTask(idCategory,title,content,dueDate,user,position){
    return await connections.query("INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL)",idCategory,title,content,dueDate,user,position);
}

async function deleteTask(id){
    return await connections.query("DELETE FROM tasks WHERE tasks.id = ?", id);
}

async function changePositionOfTask(id, position){
    return await connections.query("UPDATE tasks SET position = ? WHERE tasks.id = ?", position, id)
}

async function changeCategoryAndPosition(id, position, category){
    return await connections.query("UPDATE tasks SET category = ?, position = ? WHERE task.id = ?", category, position, id);
}

async function updateTask(id,idCategory,title,content,dueDate,position){
    return await connections.query("UPDATE tasks SET category = ?, title = ?, content = ?, dueDate = ?, position = ? WHERE id = ?", idCategory, title, content, dueDate, position, id);
}

console.log(await getTasksFromSelectedCategory(1)[0])

connections.end();