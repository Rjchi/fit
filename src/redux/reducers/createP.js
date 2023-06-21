import {
    CREATE_UP_SUCCESS,
    CREATE_UP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/createP/types';

const initialState = {
    result: null,
    loading: null,
};

const createP = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case CREATE_UP_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case CREATE_UP_FAIL:
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

export default createP;