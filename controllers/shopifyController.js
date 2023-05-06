const fs = require("fs");
const path = require("path");

const axios = require('axios');

const accessToken = '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';

const products = async (req, res) => {
    const url = 'https://test-fullstack.myshopify.com/admin/api/2023-04/products.json';
    
    const headers = {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json'
    };
    
    try {
        const response = await axios.get(url, { headers });
        const data = response.data;
        console.log(data);
        return res.status(200).json({
            status: "success",
            data
        });

  } catch (error) {
    console.error(error);
  }
}

module.exports = { products }