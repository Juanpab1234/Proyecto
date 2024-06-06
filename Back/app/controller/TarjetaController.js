import Tarjeta from '../model/Tarjeta.js';

export default class TarjetaController {
    static async guardar (req, res){
        const body = req.body;

        const tarjetas = new Tarjeta(body.ntarjeta, body.codigo_seguridad, body.fecha_vencimiento, body.cedula);
        const res_guardar = await tarjetas.guardar();

        res.json({res_guardar});
    }

    static async listar(req, res){
        let NTarjeta = req.params.NTarjeta;

        NTarjeta = !NTarjeta ? '' : NTarjeta;
        
        res.json (await Tarjeta.listar(NTarjeta));
    }
}
