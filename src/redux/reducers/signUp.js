import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/signUp/types';

const initialState = {
    result: null,
    loading: null,
};

const signUp = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
                result: null,
                loading: false,
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default signUp;