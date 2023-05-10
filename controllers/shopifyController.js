const fs = require("fs");
const path = require("path");
const axios = require('axios');
require("dotenv").config();

const products = async (req, res) => {

  const headers = {
    'X-Shopify-Access-Token': process.env.API_KEY,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.get(process.env.SHOPIFY_ENDPOINT, { headers });
    const data = response.data;
    return res.status(200).json({
      status: "success",
      data
    });

  } catch (error) {
    return res.status(500).json({
      status: "Error 500",
      error: error
    });
  }
}

module.exports = { products }