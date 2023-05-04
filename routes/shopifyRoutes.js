const express = require("express");
const ShopifyController = require("../controllers/shopifyController");

const router = express.Router();

// Rutas de pruebas
router.get("/products", ShopifyController.products);

module.exports = router;
