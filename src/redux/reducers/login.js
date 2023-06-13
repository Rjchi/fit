import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/login/types';

const initialState = {
    user: null,
    isAuthenticated: null,
    loading: null,
};

const login = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
                isAuthenticated: payload !== "Error" ? true : false,
                loading: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
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

export default login;