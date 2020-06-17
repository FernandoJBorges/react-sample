import http from './../helpers/api';

const ACTIONS = {
    SING_UP: 'SING_UP'
}

const STATE_INITIAL = {
    user: ''
}

export const singUpReducer = (state = STATE_INITIAL, action) => {
    switch (action.type) {
        case ACTIONS.SING_UP:
            return {...state,user: action.user}
        default:
             return state;
             }
}

export function register(data){
           return dispatch => {
                http.post('user',data).then(response => {
                        dispatch({
                            type: ACTIONS.SING_UP,
                            user: response.data
                        })
                    }).catch(erro => {
                      console.log(erro)
                   })
            }
}     


