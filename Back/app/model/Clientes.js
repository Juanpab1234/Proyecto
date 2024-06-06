import { ejecutar, listar } from '../src/db.js';

export default class Clientes {
    constructor(cedula, nombre, apellidos, pais, fecha_nacimiento, correo, contrasena) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellidos = apellidos; 
        this.pais = pais;
        this.fecha_nacimiento = fecha_nacimiento;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    async guardar() {
        const query = `
            INSERT INTO Clientes 
            (
            Cedula,
            Nombre, 
            Apellidos, 
            Pais, 
            FechNac, 
            Correo, 
            Contrasena
            ) 
            VALUES 
            (
            ${this.cedula},
            '${this.nombre}', 
            '${this.apellidos}',
            '${this.pais}', 
            '${this.fecha_nacimiento}', 
            '${this.correo}', 
            '${this.contrasena}'
            );
            `
        return await ejecutar(query);
    }    

    static async listar(cedula){
        const query = `select * from Clientes where Cedula like '%${cedula}'`;
        return await listar(query, true);
    }
}
