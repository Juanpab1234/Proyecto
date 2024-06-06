import Clientes from '../model/Clientes.js';

export default class ClientesController {
    static async guardar (req, res){
        const body = req.body;

        const cliente = new Clientes(body.cedula, body.nombre, body.apellidos, body.pais, body.fecha_nacimiento, body.correo, body.contrasena);
        const res_guardar = await cliente.guardar();

        res.json({res_guardar});
    }

    static async listar(req, res){
        let Cedula = req.params.Cedula;

        Cedula = !Cedula ? '' : Cedula;
        
        res.json (await Clientes.listar(Cedula));
    }
}
