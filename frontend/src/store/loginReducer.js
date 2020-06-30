import http from './../helpers/api';

const ACTIONS = {
    LOGIN: 'LOGIN_USER'
}

const STATE_INITIAL = {
    userAndToken: [], 
    error : false
}

export const loginReducer = (state = STATE_INITIAL, action) => {
    console.log(action.type)
    switch (action.type) {
      case ACTIONS.LOGIN:
        console.log('passou aqui')
             return {...state, userAndToken: action.userAndToken, error: true}
             default:
             return state;
    }
}
export function login(email, history){
    console.log(email)
    return dispatch => {
        http.post('/authenticate', email).then(response => {
               dispatch({
                  type: ACTIONS.LOGIN,
                  userAndToken : response.data
                })
                response.data && localStorage.setItem('users', JSON.stringify(response.data));
                history.push('/');
            }).catch(erro => {
              console.log(erro)
            })
        }
    }