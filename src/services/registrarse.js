const database = require("../config/database");

const register = async (nombre, apellido, email, direccion, telefono, password) => {
    const pool = await database.getPool();
    const consulta =  `INSERT INTO usuario (nombre, apellido, email, direccion, telefono, password) values($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [nombre, apellido, email, direccion, telefono, password]

    const { resInsert } = await pool.query(consulta, values);
    if (!resInsert) {
        return "No se encontró ningún usuario con estas credenciales";
    }
}

module.exports = {
    register
}