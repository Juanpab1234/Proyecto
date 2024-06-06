import mysql from 'mysql2';
import Respuesta from '../model/Respuesta.js';

const jsonConexion = {
    host: 'localhost',
    user: 'root',
    password: 'Cata2003*',
    database: 'MonkeyGrow',
    port: 3306
};

async function listar(query, tablas = false) {
    let respuesta = new Respuesta();

    try {
        var connection = mysql.createConnection(jsonConexion);

        const [filas] = await connection.promise().query(query);

        connection.end();

        respuesta.exito = true;
        respuesta.estado = 200;
        respuesta.mensaje = "exito";
        respuesta.resultado = !tablas ? filas[0] : filas;

    } catch (error) {
        respuesta.exito = false;
        respuesta.estado = "400";
        respuesta.mensaje = error.sqlMessage == undefined ? error.message : error.sqlMessage;
    }

    return respuesta;
}

async function ejecutar(query) {
    let respuesta = new Respuesta();

    try {
        var connection = mysql.createConnection(jsonConexion);

        const [result] = await connection.promise().query(query);

        connection.end();

        respuesta.exito = true;
        respuesta.estado = 200;
        respuesta.mensaje = "exito";
        respuesta.resultado = result;

    } catch (error) {
        respuesta.exito = false;
        respuesta.estado = "400";
        respuesta.mensaje = error;
    }

    return respuesta;
}

export { ejecutar, listar };
