import express, { urlencoded } from 'express';
import { routerApp } from './routes/index.routes';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('', routerApp);

export { app };
