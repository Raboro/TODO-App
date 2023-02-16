import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import printEndpointCall from './middleware/endpointCall.js';
import userRouter from './routes/user.js';

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRouter);
app.use(printEndpointCall);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
