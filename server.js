import express from 'express';
const app = express();

import startServer from './utils/startServer.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

startServer(app);
