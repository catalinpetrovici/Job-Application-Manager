import startServer from './utils/startServer.js';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

startServer(app);
