const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {
    async get(request,response){
        const products = await connection('tb_product').select('*');
        return response.json(products);
    },
    
    async create(request,response){
       const {name, description, image, price, url} =  request.body;
       const [id] = await connection('tb_product').insert({
            name, 
            description,
            image,
            price,
            url
        })
        return response.json({id});
    }
};

