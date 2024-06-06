import Pagos from '../model/Pagos.js';

export default class PagosController {
    static async guardar (req, res){
        const body = req.body;

        const pago = new Pagos(body.ntarjeta, body.cedula, body.nit, body.fecha_pago, body.cuotas, body.valor_pago, body.cantidad_acciones);
        const res_guardar = await pago.guardar();

        res.json({res_guardar});
    }

    static async listar(req, res){
        let NPago = req.params.NPago;

        NPago = !NPago ? '' : NPago;
        
        res.json (await Pagos.listar(NPago));
    }
}
