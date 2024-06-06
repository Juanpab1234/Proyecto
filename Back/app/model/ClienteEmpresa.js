import { ejecutar, listar } from '../src/db.js';

export default class ClienteEmpresa {
    constructor(cedula, nit) {
        this.cedula = cedula;
        this.nit= nit;
    }

    async guardar() {
        const query = `
            INSERT INTO ClienteEmpresa
            (
            Cedula,
            Nit
            ) 
            VALUES 
            (
            ${this.cedula},
            ${this.nit}
            );
            `
        return await ejecutar(query);
    }    

    static async listar(cedula){
        const query = `select * from ClienteEmpresa where Cedula like '%${cedula}'`;
        return await listar(query, true);
    }
}
