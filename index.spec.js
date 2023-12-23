const request = require("supertest");
const server = require("./index");

describe("Operaciones de Shophone", () => {
  it("Obtener listado de productos", async () => {
    const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.sSCNRB04S0TXUv0OH9g7pjWKRotdPjPPIZ8qOTz4seY";
    const response = await request(server)
      .get("/productos")
      .set("authorization", jwt)
      .send();

   

    expect(response.statusCode).toBe(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

it('Prueba de registro de nuevo usuario y mensaje de status 201 exitoso', async () => {
  const usuario = {
      nombre: "oscar", //Reemplazar por un nombre valido
      apellido: "maldonado", //Reemplazar por un apellido valido
      email: "test@test.com", //Reemplazar por un email valido
      direccion: "maipu2222", //Reemplazar por una direccion valida
      telefono: "88888888", //Reemplazar por un telefono valido
      password: "12345", //Reemplazar por una contraseña valida
  };

  const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.sSCNRB04S0TXUv0OH9g7pjWKRotdPjPPIZ8qOTz4seY";

  const response = await request(server)
      .post('/register')
      .set("authorization", jwt)
      .send();

  expect(response.statusCode).toBe(201);
  expect(response.body).toHaveProperty('mensaje', 'Usuario creado con exito');
});

it('Prueba de login de usuario registrado, envío de token y status 200 exitoso', async () => {
  
  // const jwt =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.sSCNRB04S0TXUv0OH9g7pjWKRotdPjPPIZ8qOTz4seY";

  const response = await request(server)
      .post('/login')
      // .set("authorization", jwt)
      .send({ email: 'test@test.com', password: '12345' }); //Reemplazar por usuario y contraseña valida
    
      console.log(response.statusCode);
      console.log(response.body);

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('token');
  expect(typeof response.body.token).toBe('string');
});