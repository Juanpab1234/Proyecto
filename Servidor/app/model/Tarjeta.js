import { ejecutar, listar } from '../src/db.js';

export default class Tarjeta {
    constructor(ntarjeta, codigo_seguridad, fecha_vencimiento, cedula) {
        this.ntarjeta = ntarjeta;
        this.codigo_seguridad = codigo_seguridad; 
        this.fecha_vencimiento = fecha_vencimiento;
        this.cedula = cedula;
    }

    async guardar() {
        const query = `
            INSERT INTO Tarjeta
            (
            NTarjeta,
            CodigoSeguridad, 
            FechaVenci, 
            Cedula
            ) 
            VALUES 
            (
            ${this.ntarjeta},
            ${this.codigo_seguridad}, 
            '${this.fecha_vencimiento}',
            ${this.cedula}
            );
            `
        return await ejecutar(query);
    }    

    static async listar(ntarjeta){
        const query = `select * from Tarjeta where NTarjeta like '%${ntarjeta}'`;
        return await listar(query, true);
    }
}
