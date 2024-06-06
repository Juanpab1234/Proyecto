import { Router } from 'express';
import EmpresasController from '../controller/EmpresasController.js';

const router = Router();

router.post('/', EmpresasController.guardar);
router.get('/', EmpresasController.listar);
router.get('/:Nit', EmpresasController.listar);

export default router;