const database = require("../config/database");

const obtenerProductos = async () => {
    const pool = await database.getPool();
    const resultados = await pool.query(" SELECT * FROM producto");
    return resultados;
}

module.exports = {
    obtenerProductos
}