import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './errors/errorMiddleware';

import { routerApp } from './routes/index.routes';

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( '', routerApp );
app.use( errorMiddleware );

export { app };
