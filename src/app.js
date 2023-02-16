import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import printEndpointCall from './middleware/endpointCall.js';
import userRouter from './routes/user.js';

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const PORT = process.env.PORT;

app.use('/api/user', userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(printEndpointCall);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
