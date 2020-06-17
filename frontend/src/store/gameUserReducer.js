import http from './../helpers/api';
import {showMessage} from './messageReducer'
const ACTIONS = {
    SAVE: 'GAME_USER_SAVE',
    LIST: 'GAME_USER_LIST',
    DELETE: 'GAME_USER_DELETE',
    CONFIRM_SAVE: 'GAME_USER_CONFIRM_SAVE'
}

const STATE_INITIAL = {
    gameUser: []
}

export const gameUserReducer = (state = STATE_INITIAL, action) => {
    console.log(action.type)
    switch (action.type) {
        case ACTIONS.LIST:
            return {...state, gameUser: action.gameUser}
        case ACTIONS.SAVE:
            return {...state, game: action.game}
        default:
             return state;
        }
}

export function findByGame(idGame){
    return dispatch => {
        http.get(`/gameUsers/${idGame}`).then(response => {
               dispatch({
                  type: ACTIONS.LIST,
                  gameUser : response.data
              })
            }).catch(erro => {
              console.log(erro)
            })
        }
    }

   export function save(gameUser){
        return dispatch => {
            http.post('/gameUser', gameUser).then(response => {
                     dispatch({
                        type: ACTIONS.SAVE,
                        game : response.data
                    })
                }).catch(erro => {
                  console.log(erro)
               })
           }
        }



    export function confirmSaveItem(id){
            return dispatch => {
                        dispatch([
                            {
                                type: ACTIONS.CONFIRM_SAVE,
                                id : id
                            }, 
                            showMessage('Tem certeza que deseja excluir sua aposta?')
                        ])
            }
    }