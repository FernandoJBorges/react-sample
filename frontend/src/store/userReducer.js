import http from './../helpers/api';

const ACTIONS = {
    LIST: 'LIST_USER'
}

const STATE_INITIAL = {
    users: []
}

export const userReducer = (state = STATE_INITIAL, action) => {

    switch (action.type) {
        
        case ACTIONS.LIST:
             return {...state,users: action.users}
             default:
             return state;
             }
}
export function findByAll(){
    return dispatch => {
        http.get('/user').then(response => {
                console.log(response.data)
                dispatch({
                  type: ACTIONS.LIST,
                  users : response.data
                })
              
            }).catch(erro => {
              console.log(erro)
            })
        }
    }