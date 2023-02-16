import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import printEndpointCall from './middleware/endpointCall.js';

dotenv.config({ path: path.join(process.cwd().replace('src', '.env')) });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(printEndpointCall);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.post('/api/:name', (req, res) => {
    res.redirect('http://127.0.0.1:5500/Frontend/html/todo.html');
});
