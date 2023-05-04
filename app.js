const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de node arrancada");

// Crear servidor Node
const app = express();
const puerto = 'https://api-shopify-eight.vercel.app/';

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); // form-urlencoded
app.set('view engine', 'pug');

// RUTAS
const mainRoute = require("./routes/shopifyRoutes");

// Cargo las rutas
app.use("/api", mainRoute);

app.get("/", (req, res) => {
    return res.status(200).send(
        "<h1>The only available endpoint: /api/products</h1>"
    );
});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});

