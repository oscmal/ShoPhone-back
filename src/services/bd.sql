// tabla usuario (
     id_usuario SERIAL PRIMARY KEY,
    email VARCHAR(255),
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    direccion VARCHAR(255),
    telefono VARCHAR(255),
    password VARCHAR(255),
    administrador  INT

    INSERT INTO "usuario" ("email", "nombre", "apellido", "direccion", "telefono", "password", "administrador")
VALUES
('test@test', 'oscar', 'maldonado', 'maipu2222', '88888888', '12345', )



    // tabla producto ( 
        id SERIAL PRIMARY KEY, 
        nombre VARCHAR(50), 
        imagen VARCHAR(255), 
        detalle VARCHAR(255), 
        precio INT, 
        stock INT);

        INSERT INTO producto 
        (nombre, imagen, detalle, precio, stock) VALUES ('Xiaomi Redmi 10 5G 128GB', 'https://miportal.entel.cl/static/112820231414284/images/C_Xiaomi_Redmi_10_5G_1_276x549.jpg', 'nulo', 90990, 10);
        (nombre, imagen, detalle, precio, stock) VALUES ('Apple ¡Phone 14 128GB', 'https://miportal.entel.cl/static/112820231414284/images/iphone13-mini-azul-medianoche_01_276x549.jpg', 'nulo', 814990,10);
        (nombre, imagen, detalle, precio, stock) VALUES ('Motorola Moto E13 64GB', 'https://miportal.entel.cl/static/112820231414284/images/moto-e13-verde-01_276x549.jpg', 'nulo', 60000,10);
        (nombre, imagen, detalle, precio, stock) VALUES ('Apple Watch SE 40mm Aluminio GPS Blanco', 'https://miportal.entel.cl/static/112820231414284/images/apple-watch-se-aluminium-starlight-40mm-01_276x549.jpg', 'nulo', 279990,10);
