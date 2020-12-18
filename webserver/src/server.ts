import express, { Request, Response } from 'express';
import path from 'path';
import http from 'http';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const main = async () => {
  const users = require('./data');
  app.use('/api', users.registerRoutes());
  await users.configure();

  app.use(express.static('../client/dist'));
  app.get('/*', (_: Request, res: Response) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
  });

  httpServer.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
  });
};

main();
