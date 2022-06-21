import { LOGIN } from '../actions/actions';

const initialState = {
    user: ['Uay'],
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        // case GET_ACCOUNT:
        //     return {
        //         ...state,
        //         user: action.payload,
        //     };
        // case UPDATE_ACCOUNT:
        //     return {
        //         ...state,
        //         user: action.payload,
        //     };
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;