import { setMaxListeners } from 'events';
setMaxListeners(20);
import express from 'express';
import router from './router/Index.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor web ejecutandose');
})

app.use('/api', router);

const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, () => {
    console.log('Servidor corriendo en el puerto', PUERTO);
})