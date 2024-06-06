import { ejecutar, listar } from '../src/db.js';

export default class Empresas {
    constructor(nit, nempresa, pseudonimo, valor_accion, porcentaje, tipo_empresa) {
        this.nit = nit;
        this.nempresa = nempresa;
        this.pseudonimo = pseudonimo; 
        this.valor_accion = valor_accion;
        this.porcentaje = porcentaje;
        this.tipo_empresa = tipo_empresa;
    }

    async guardar() {
        const query = `
            INSERT INTO Empresas
            (
            Nit,
            NEmpresa, 
            Pseudonimo, 
            ValorAccion, 
            Porcentaje, 
            TipoEmpresa
            ) 
            VALUES 
            (
            ${this.nit},
            '${this.nempresa}', 
            '${this.pseudonimo}',
            ${this.valor_accion}, 
            ${this.porcentaje}, 
            '${this.tipo_empresa}'
            );
            `
        return await ejecutar(query);
    }    

    static async listar(nit){
        const query = `select * from Empresas where Nit like '%${nit}'`;
        return await listar(query, true);
    }
}
