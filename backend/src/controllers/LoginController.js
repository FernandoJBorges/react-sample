const config = require('./../../config.json');
const jwt = require('jsonwebtoken');
const connection = require('../database/connection');

module.exports = {
    async authenticate(req, res, next){
        const {email, pwd} =  req.body;
        console.log('Init process authenticate user...')
        const user = await login(email, pwd);
        return res.json(user);
    }
};

async function login(email, pwd) {
     const user = await connection('tb_user').where({
        email: email,
        pwd:  pwd
      }).select('*');
     if (Array.isArray(user) && user.length) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {...userWithoutPassword, token};
    }
}