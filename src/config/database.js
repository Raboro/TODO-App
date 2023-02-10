import mysql from "mysql2"
import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(process.cwd().replace("src\\config", ".env"))});

const connections = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_USER
}).promise();


async function getTasksFromSelectedCategory(id) {
    const temp = await connections.query("SELECT * FROM tasks WHERE category = ? ORDER BY position ASC", id);
    return temp[0]
}

async function newTask(idCategory, title, content, dueDate, user, position) {
    const temp = await connections.query("INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL)", [idCategory, title, content, dueDate, user, position]);
}

async function deleteTask(id) {
    const temp = await connections.query("DELETE FROM tasks WHERE tasks.id = ?", id);
    return temp[0]
}

async function changePositionOfTask(id, position) {
    const temp = await connections.query("UPDATE tasks SET position = ? WHERE tasks.id = ?", [position, id])
    return temp[0]
}

async function changeCategoryAndPosition(id, position, category) {
    const temp = await connections.query("UPDATE tasks SET category = ?, position = ? WHERE task.id = ?", [category, position, id]);
    return temp[0]
}

async function updateTask(id, idCategory, title, content, dueDate, position) {
    const temp = await connections.query("UPDATE tasks SET category = ?, title = ?, content = ?, dueDate = ?, position = ? WHERE id = ?", [idCategory, title, content, dueDate, position, id]);
    return temp[0]
}


async function signIn(email, pwd) {
    const temp = connections.query("SELECT email FROM users WHERE email = ? AND pwd = ?", [email, pwd]);
    return temp[0]
}

async function signUpCheckUniqueEmail(email) {
    const temp = connections.query("SELECT email FROM users WHERE email = ?", email);
    return temp[0]
}

async function signUpInsertNewUser(firstName, lastName, email, pwd) {
    const temp = connections.query("INSERT INTO users VALUES(?,?,?,?)", [firstName, lastName, email, pwd]);
    return temp[0]
}

console.log(await getTasksFromSelectedCategory(3));

connections.end();

export default connections;