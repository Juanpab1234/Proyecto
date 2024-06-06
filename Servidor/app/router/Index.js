import { Router } from 'express';
import router_clientes from './clientes.js';
import router_clienteempresa from './clienteempresa.js';
import router_empresas from './empresas.js';
import router_pagos from './pagos.js';
import router_tarjeta from './tarjeta.js';

const router = Router();

router.use('/clientes', router_clientes);
router.use('/clienteempresa', router_clienteempresa);
router.use('/empresas', router_empresas);
router.use('/pagos', router_pagos);
router.use('/tarjeta', router_tarjeta);

export default router;