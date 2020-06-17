import {combineReducers} from 'redux';
import {taskReducer} from './taskReducer';
import {messageReducer} from './messageReducer';
import {gameReducer} from './gameReducer';
import {userReducer} from './userReducer';
import {productReducer} from './productReducer';
import {singUpReducer} from './singUpReducer';
import {gameUserReducer} from './gameUserReducer';
import {myGameReducer} from './myGamesReducer';
import {loginReducer} from './loginReducer';


const mainReducer = combineReducers({
    tasks: taskReducer,
    messages: messageReducer,
    item : gameReducer,
    users : userReducer,
    singUp : singUpReducer,
    products: productReducer,
    gameUser: gameUserReducer,
    myGames: myGameReducer,
    login: loginReducer
})

export default mainReducer;