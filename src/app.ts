import express, { Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes'

const app: express.Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// user routes
app.use('/users', userRoutes);

export default app;