
const ACTIONS = {
    SHOW: 'SHOW_TASK',
    HIDE: 'HIDE_TASK'
}

const STATE_INITIAL = {
   message: '',
   showMessage: false
}

export const messageReducer = (state = STATE_INITIAL, action) => {

switch (action.type) {
    case ACTIONS.SHOW:
        return {...state, message: action.message, showMessage: true}
    case ACTIONS.HIDE:
        return {...state, message: '', showMessage: false}
         default:
         return state;
    }
}

export function showMessage(msg){
    return {
             type: ACTIONS.SHOW,
             message : msg
            }
}

export function hideMessage(msg){
    return {
             type: ACTIONS.HIDE
            }
}