const express = require("express");
const morgan = require("morgan");
const database = require("./src/config/database");
const jwt = require("jsonwebtoken")
const login = require("./src/services/login");
const register  = require("./src/services/registrarse");
const productos  = require("./src/services/productos");
const bodyParser = require('body-parser');
const cors = require("cors");
const isAuthenticated = require('./src/middleware/auth');


// configuración inicial
const app = express();
if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => console.log(`Listening on port 3000`));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Middlewares
app.use(morgan("dev"));
app.use(cors());

// rutas
app.get("/productos", isAuthenticated, async (req,res) =>{
    try{
        const  result = await productos.obtenerProductos();
        console.log(result.rows)
        res.status(200).send(result.rows)
    }catch(e){
        console.log("error: ", e);
        res.status(500).send("error al obtener productos");
    }
});

    app.post("/login", async (req, res) => {
        try {
            const { email, password } = req.body
            const response = await login.verificarCredenciales(email, password)
            const token = jwt.sign({ email }, process.env.SECRET_KEY)
            res.send({token})
        } catch (error) {
            res.status(error.code || 401).send("No se encontró ningún usuario con estas credenciales")
        }   
    })

    app.post("/register", async (req, res) => {
        try {
            let body = req.body;
            console.log('receiving data...');
            console.log('body is ',req.body);
            await register.register(body.nombre, body.apellido, body.email, body.direccion, body.telefono, body.password)
            res.status(201).json ({ mensaje: "Usuario creado con exito"});
        } catch (error) {
            console.log(error)
            res.status(error.code || 500).send(error)
        }   
    })

    module.exports = app;