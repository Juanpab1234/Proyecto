import { ejecutar, listar } from '../src/db.js';

export default class Pagos {
    constructor(ntarjeta, cedula, nit, fecha_pago, cuotas, valor_pago, cantidad_acciones) {
        this.ntarjeta = ntarjeta;
        this.cedula = cedula;
        this.nit = nit; 
        this.fecha_pago = fecha_pago;
        this.cuotas = cuotas;
        this.valor_pago = valor_pago;
        this.cantidad_acciones = cantidad_acciones;
    }

    async guardar() {
        const query = `
            INSERT INTO Clientes 
            (
            NTarjeta, 
            Cedula, 
            Nit, 
            FechaPago, 
            Cuotas, 
            ValorPago,
            CantidadAcciones
            ) 
            VALUES 
            (
            ${this.ntarjeta}, 
            ${this.cedula},
            ${this.nit},
            '${this.fecha_pago}', 
            ${this.cuotas}, 
            ${this.valor_pago}, 
            ${this.cantidad_acciones}
            );
            `
        return await ejecutar(query);
    }    

    static async listar(npago){
        const query = `select * from Pagos where NPago like '%${npago}'`;
        return await listar(query, true);
    }
}
