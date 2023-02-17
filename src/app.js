import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { printEndpointCall } from './middleware/endpointCall.js';
import { allowCrossOrigin } from './middleware/crossOrigin.js';
import userRouter from './routes/user.js';
import signInRouter from './routes/signIn.js';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const app = express();
const PORT = process.env.PORT;

app.use(printEndpointCall);
app.use(allowCrossOrigin);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), '/src/public')));

app.use('/user', userRouter);
app.use('/signIn', signInRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
