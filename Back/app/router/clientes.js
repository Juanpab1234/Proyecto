import { Router } from 'express';
import ClientesController from '../controller/ClientesController.js';

const router = Router();

router.post('/', ClientesController.guardar);
router.get('/', ClientesController.listar);
router.get('/:Cedula', ClientesController.listar);

export default router;