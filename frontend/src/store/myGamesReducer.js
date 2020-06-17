import http from './../helpers/api';
import {showMessage} from './messageReducer'

const ACTIONS = {
    LIST: 'MY_GAME_LIST',
    DELETE: 'MY_GAME_DELETE',
    CONFIRM_DELETE: 'MY_GAME_CONFIRM_DELETE'
}

const STATE_INITIAL = {
    myGames: [],
    myGame: ''
}

export const myGameReducer = (state = STATE_INITIAL, action) => {
    console.log(`TYPE : ----- ${action.type}`)
    switch (action.type) {
        case ACTIONS.LIST:
            return {...state, myGames: action.myGames}
         case ACTIONS.CONFIRM_DELETE:
     
                return {...state, myGame: action.id}
        case ACTIONS.DELETE:
            const id = action.id;
    
            const myGamesFilter = state.myGames.filter(e => e.id !== id)
       
            return {...state, myGames: myGamesFilter}
        default:
             return state;
        }
}

export function getGameByUser(idUser){
   return dispatch => {
        http.get(`/gameByUser/${idUser}`).then(response => {
                dispatch({
                    type: ACTIONS.LIST,
                    myGames : response.data
                })
            }).catch(erro => {
              console.log(erro)
            })
     }
}

export function deleteItem(id){
    return dispatch => {
        http.delete(`/gameUserDelete/${id}`).then(response => {
                dispatch({
                    type: ACTIONS.DELETE,
                    id : id
                })
            }).catch(erro => {
              console.log(erro)
           })
       }
    }

   export function confirmDeleteItem(id){
       return dispatch => {
                dispatch([
                    {
                        type: ACTIONS.CONFIRM_DELETE,
                        id : id
                    }, 
                    showMessage('Tem certeza que deseja excluir sua aposta?')
                ])
            }
        }

    