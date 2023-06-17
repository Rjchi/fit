import {
    UPDATE_CLA_SUCCESS,
    UPDATE_CLA_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/updateCla/types';

const initialState = {
    result: null,
    loading: null,
};

const updateCla = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CLA_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case UPDATE_CLA_FAIL:
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

export default updateCla;