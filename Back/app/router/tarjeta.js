import { Router } from 'express';
import TarjetaController from '../controller/TarjetaController.js';

const router = Router();

router.post('/', TarjetaController.guardar);
router.get('/', TarjetaController.listar);
router.get('/:NTarjeta', TarjetaController.listar);

export default router;