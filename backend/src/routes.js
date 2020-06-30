const express = require('express');
const routers = express.Router();
const Role = require('./_helpers/role');
const authorize = require('./_helpers/authorize')
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const GameController = require('./controllers/GameController');
const GameUserController = require('./controllers/GameUserController');
const LoginController = require('./controllers/LoginController');

routers.post('/authenticate', LoginController.authenticate);
routers.post('/user', UserController.create);
routers.post('/userDefault',authorize(Role.Admin), UserController.createDefault);
routers.post('/gameUser', authorize(), GameUserController.create);
routers.post('/game', authorize(), GameController.create);
routers.post('/product', authorize(), ProductController.create);

routers.get('/products', authorize(), ProductController.get);
routers.get('/user', authorize(), UserController.get);
routers.get('/games', authorize([Role.Admin, Role.User]), GameController.get);
routers.get('/gameAndProduct', authorize(), GameController.findByGameAndProduct);
routers.get('/gameUsers/:id', authorize(), GameUserController.get);
routers.get('/gameByUser/:id', authorize(), GameUserController.getGameByUser);
routers.get('/gameUsers', authorize(), GameUserController.getAll);

routers.delete('/gameUserDelete/:id', authorize(), GameUserController.delete);
routers.delete('/gameDelete/:id', authorize(), GameController.delete);

routers.put('/updateDateProcess/:id', authorize(), GameController.updateDateProcess);
routers.put('/winner/:id', authorize(), GameController.updateWinner);

module.exports = routers;