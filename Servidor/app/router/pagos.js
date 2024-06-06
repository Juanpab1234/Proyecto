import { Router } from 'express';
import PagosController from '../controller/PagosController.js';

const router = Router();

router.post('/', PagosController.guardar);
router.get('/', PagosController.listar);
router.get('/:NPago', PagosController.listar);

export default router;