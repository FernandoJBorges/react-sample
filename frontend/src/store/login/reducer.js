const initialState = { error: false }

const ACTIONS = {
    ERROR: 'LOGIN_ERROR'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}

