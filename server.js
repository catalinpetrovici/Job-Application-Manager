import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import cors from 'cors';
import morganStart from './utils/morgan.js';
import startServer from './utils/startServer.js';

// router
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// client
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// security package
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

const __dirname = dirname(fileURLToPath(import.meta.url));

// when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/dist')));

morganStart(app);
// app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// Limit Requests

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

startServer(app);
