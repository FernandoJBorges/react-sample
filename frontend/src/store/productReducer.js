import http from './../helpers/api';

const ACTIONS = {
    PRODUCT_LIST: 'PRODUCT_LIST'
}

const STATE_INITIAL = {
    products: []
}

export const productReducer = (state = STATE_INITIAL, action) => {
    console.log(action.type)
  switch (action.type) {
        case ACTIONS.PRODUCT_LIST:
            return {...state,products: action.products}
        default:
             return state;
        }
}

export function findByAll(){
     return dispatch => {
        http.get('/gameAndProduct').then(response => {
             dispatch({
                  type: ACTIONS.PRODUCT_LIST,
                  products : response.data
              })
              
            }).catch(erro => {
              console.log(erro)
            })
        }
    }

    export function deleteItem(idGame){
        return dispatch => {
            http.delete(`/deleteGame/${idGame}`).then(response => {
                    dispatch({
                        type: ACTIONS.DELETE,
                        task : response.data
                    })
                }).catch(erro => {
                  console.log(erro)
               })
           }
        }