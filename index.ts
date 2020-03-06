import express, { Application } from 'express';
import entryPoint from './src/app';
const app: express.Application = express();
const port: number = 4000;

// entry point
app.use(entryPoint)

//Se levanta el servidor
app.listen(port, () => {
    console.log('Servidor inicializado');
});