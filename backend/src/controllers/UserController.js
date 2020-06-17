const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {
    async get(req, res, next){
        const user = await connection('tb_user').select('*');
        return res.json(user);
    },
    
    async create(request,response){
       const {name, lastName, email, role, pwd} =  request.body;
       //const pwd = crypto.randomBytes(4).toString('HEX');
       const [id] = await connection('tb_user').insert({
            name, 
            lastName, 
            email,
            pwd,
            pwdlast:pwd,
            role
        })
        return response.json({id});
    },
    async createDefault(request,response){
        const {name, lastName, email} =  request.body;
        const pwd = crypto.randomBytes(4).toString('HEX');
        const [id] = await connection('tb_user').insert({
             name, 
             lastName, 
             email, 
             pwd,
             pwdlast:pwd,
         })
         return response.json({id});
     }
};