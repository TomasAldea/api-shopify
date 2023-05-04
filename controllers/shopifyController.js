const fs = require("fs");
const path = require("path");

const axios = require('axios');

const accessToken = '4444f2';

const products = async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    /* const headers = {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json'
    };*/
    
    try {
        const response = await axios.get(url/*, { headers }*/);
        const data = response.data;
        return res.status(200).json({
            status: "success",
            data
        });

  } catch (error) {
    console.error(error);
  }
}

module.exports = { products }