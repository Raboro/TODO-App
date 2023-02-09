import mysql from "mysql2"

const connections = mysql.createPool({
    host: "sql7.freemysqlhosting.net",
    user: "sql7593995",
    password: "ial4mljDpf",
    database: "sql7593995"
}).promise();



async function getTasksFromSelectedCategory(id) {
    const temp = await connections.query("SELECT * FROM tasks WHERE category = ? ORDER BY position ASC", id);
    return temp
}

async function newTask(idCategory, title, content, dueDate, user, position) {
    const temp = await connections.query("INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL)", [idCategory, title, content, dueDate, user, position]);
}

async function deleteTask(id) {
    const temp = await connections.query("DELETE FROM tasks WHERE tasks.id = ?", id);
    return temp
}

async function changePositionOfTask(id, position) {
    const temp = await connections.query("UPDATE tasks SET position = ? WHERE tasks.id = ?", [position, id])
    return temp
}

async function changeCategoryAndPosition(id, position, category) {
    const temp = await connections.query("UPDATE tasks SET category = ?, position = ? WHERE task.id = ?", [category, position, id]);
    return temp
}

async function updateTask(id, idCategory, title, content, dueDate, position) {
    const temp = await connections.query("UPDATE tasks SET category = ?, title = ?, content = ?, dueDate = ?, position = ? WHERE id = ?", [idCategory, title, content, dueDate, position, id]);
    return temp
}



async function signIn(email, pwd) {
    const temp = connections.query("SELECT email FROM users WHERE email = ? AND pwd = ?", [email, pwd]);
    return temp
}

async function signUpCheckUniqueEmail(email) {
    const temp = connections.query("SELECT email FROM users WHERE email = ?", email);
    return temp
}

async function signUpInsertNewUser(firstName, lastName, email, pwd) {
    const temp = connections.query("INSERT INTO users VALUES(?,?,?,?)", [firstName, lastName, email, pwd]);
    return temp
}

const test = await signUpInsertNewUser("Peter", "Mueller", "km@mail.com", "123456")
console.log(test[0]);

connections.end();

export default connections;