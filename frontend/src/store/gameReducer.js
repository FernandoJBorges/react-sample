import http from './../helpers/api';
import {showMessage} from './messageReducer'

const ACTIONS = {
    SAVE: 'GAME_SAVE',
    LIST: 'GAME_LIST',
    LOAD: 'GAME_LOAD',
    ITEM_SELECTED: 'GAME_ITEM_SELECTED',
}

const STATE_INITIAL = {
    item: '0'
}

export const gameReducer = (state = STATE_INITIAL, action) => {
    
    switch (action.type) {
        case ACTIONS.ITEM_SELECTED:
            return {...state, item: action.item}
        case ACTIONS.LIST:
            return {...state,items: action.items, item: '0'}
        default:
             return state;
        }
}

export function  selectNumber(item) {
    return dispatch => {
                dispatch({
                    type: ACTIONS.ITEM_SELECTED,
                    item: item
                })
          }
}

export function findByAll(){
    return dispatch => {
        http.get('/games').then(response => {
          
              dispatch({
                  type: ACTIONS.LIST,
                  items : response.data
              })
              
            }).catch(erro => {
              console.log(erro)
            })
        }
    }