import ClienteEmpresa from '../model/ClienteEmpresa.js';

export default class ClienteEmpresaController {
    static async guardar (req, res){
        const body = req.body;

        const clientesempresas = new ClienteEmpresa(body.cedula, body.nit);
        const res_guardar = await clientesempresas.guardar();

        res.json({res_guardar});
    }

    static async listar(req, res){
        let Cedula = req.params.Cedula;

        Cedula = !Cedula ? '' : Cedula;
        
        res.json (await ClienteEmpresa.listar(Cedula));
    }
}
