const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {
    async get(request,response){
        const products = await connection('tb_game').select('*');
        return response.json(products);
    },
    
    async create(request,response){
       const {title, product_id, price} =  request.body;
       const [id] = await connection('tb_game').insert({
            title, 
            product_id,
            price
        })
        return response.json({id});
    },

    async updateWinner(request,response){
        const {user_id} =  request.body;
        const { id } =  request.params;
        const game =  await connection('tb_game').where('id', id)
        .update({
            user_id
        })
     return response.json({game});
     },

     async updateDateProcess(request,response){
        const {dateprocess} =  request.body;
        const { id } =  request.params;
        await connection('tb_game').where('id', id)
        .update({
            dateprocess
        })
     return response.json({id});
     },
     async findByGameAndProduct(request,response){
        const {page = 1} =  request.query;
        const [count] = await connection('tb_game').count();
        const incidents = await connection('tb_game')
                .join('tb_product', 'tb_product.id', '=', 'tb_game.product_id')
                .limit(5)
                .offset((page - 1) * 5)
                .select(['tb_game.*','tb_product.name' ,'tb_product.image' ]);


        response.header('X-Total-Count', count['count(*)']);

       
        return response.json(incidents);
    },
    async delete(request,response){
        const { id } =  request.params;
        await connection('tb_game').where('id',id).delete();
        return response.status(204).send();
    }
};