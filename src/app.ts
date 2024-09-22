import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes/route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//  route connect
app.use('', router);

export default app;
