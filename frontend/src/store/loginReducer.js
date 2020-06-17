import http from './../helpers/api';

const ACTIONS = {
    LOGIN_USER: 'LOGIN_USER'
}

const STATE_INITIAL = {
    userAndToken: []
}

export const loginReducer = (state = STATE_INITIAL, action) => {
    //console.log(action.type)
    //console.log(action.userAndToken)
    
    switch (action.type) {
      case ACTIONS.LOGIN_USER:
             return {...state, userAndToken: action.userAndToken}
             default:
             return state;
             }
}
export function login(email, history){
    return dispatch => {
        http.post('/authenticate', email).then(response => {
               dispatch({
                  type: ACTIONS.LOGIN_USER,
                  userAndToken : response.data
                })
                response.data && localStorage.setItem('users', JSON.stringify(response.data));
              history.push('/');
            }).catch(erro => {
              console.log(erro)
            })
        }
    }