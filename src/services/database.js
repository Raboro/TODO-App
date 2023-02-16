import dotenv from 'dotenv';
import path from 'path';
import mysql from 'mysql2';

dotenv.config({ path: path.join(process.cwd().replace('src\\services', '.env')) });

function getConnection() {
    return mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }).promise();
}

export async function executeQuery(query) {
    const connection = getConnection();
    const data = await connection.query(query);
    await connection.end();
    return data[0];
}
