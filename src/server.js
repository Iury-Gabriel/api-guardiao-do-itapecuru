import express from 'express';
import { router } from './routes.js';
import connect from './database/dbConnect.js';

const app = express();

const connection = await connect();

connection.on('error', (error) => console.log(error));

connection.once('open', () => console.log('Connected to database'));

app.use(express.json());
app.use(router)

app.listen(3000, () => console.log('Server running on port 3000'));