import mysql from "mysql2"

const connections = mysql.createPool({
    host: "sql7.freemysqlhosting.net",
    user: "sql7593995",
    password: "ial4mljDpf",
    database: "sql7593995"
}).promise();


async function test(){
    const data = await connections.query("SELECT * FROM tasks;");
    return data
}

const test1 = await test();
console.log(test1[0]);



connections.end();
export default connections;