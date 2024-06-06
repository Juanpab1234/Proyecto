import { Router } from 'express';
import ClienteEmpresaController from '../controller/ClienteEmpresaController.js';

const router = Router();

router.post('/', ClienteEmpresaController.guardar);
router.get('/', ClienteEmpresaController.listar);
router.get('/:Cedula', ClienteEmpresaController.listar);

export default router;