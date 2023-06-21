import {
    CREATE_UC_SUCCESS,
    CREATE_UC_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/createC/types';

const initialState = {
    result: null,
    loading: null,
};

const createC = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case CREATE_UC_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case CREATE_UC_FAIL:
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

export default createC;