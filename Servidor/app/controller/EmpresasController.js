import Empresas from '../model/Empresas.js';

export default class EmpresasController {
    static async guardar (req, res){
        const body = req.body;

        const empresa = new Empresas(body.nit, body.nempresa, body.pseudonimo, body.valor_accion, body.porcentaje, body.tipo_empresa);
        const res_guardar = await empresa.guardar();

        res.json({res_guardar});
    }

    static async listar(req, res){
        let Nit = req.params.Nit;

        Nit = !Nit ? '' : Nit;
        
        res.json (await Empresas.listar(Nit));
    }
}
