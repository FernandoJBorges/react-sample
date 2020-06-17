const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {
    async get(request,response){
        const {id} =  request.params;
        const usersByGame = await connection('tb_user_game').where("game_id", id).select('number');
        return response.json(usersByGame);
    },
    async getGameByUser(request,response){
        const {id} =  request.params;
        const usersByGame = await connection('tb_user_game').where("user_id", id).select('*');
        return response.json(usersByGame);
    },
    async getAll(request,response){
        const usersByGame = await connection('tb_user_game').select('*');
        return response.json(usersByGame);
    },
    async create(request,response){
       const {user_id, game_id, number} =  request.body;
       const [id] = await connection('tb_user_game').insert({
            user_id, 
            game_id,
            number
        })
        return response.json({id});
    },
    async delete(request,response){
        const { id } =  request.params;
        await connection('tb_user_game').where('id',id).delete();
        return response.status(204).send();
    }
};