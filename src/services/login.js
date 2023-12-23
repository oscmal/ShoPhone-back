const database = require("../config/database");

const verificarCredenciales = async (email, password) => {
    const consulta = " SELECT * FROM usuario WHERE email = $1 AND password = $2"
    const values = [email, password]
    const pool = await database.getPool();
    const { rowCount } = await pool.query(consulta, values)
    if (!rowCount) {
        throw new Error(  {
            code:404,
            message: "No se encontró ningún usuario con estas credenciales" 
        })
    }else{
        return rowCount;
    }
}

module.exports = {
    verificarCredenciales
}