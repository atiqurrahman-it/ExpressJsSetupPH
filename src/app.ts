import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import errorHandler from './app/middlewares/common_error/common_error';
import router from './app/routes/route';

const app: Application = express();

//parsers
app.use(express.json());
// cors setup
app.use(cors());

// dotenv config
dotenv.config();

//  route connect
app.use('', router);

// common default error
app.use(errorHandler);

// 404 error
app.use('*', (req, res) => {
  res.status(404).json({ message: 'route not found' });
});

export default app;
