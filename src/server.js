import express from 'express';
import { router } from './routes.js';
import connect from './database/dbConnect.js';
import cors from 'cors';

const app = express();
app.use(cors())

const connection = await connect();

connection.on('error', (error) => console.log(error));

connection.once('open', () => console.log('Connected to database'));

app.use(express.json());
app.use(router)

app.listen({ port: 3000, host: '0.0.0.0' }, () => console.log('Server running on port 3000'));