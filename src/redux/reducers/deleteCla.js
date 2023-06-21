import {
    DELETE_CLA_SUCCESS,
    DELETE_CLA_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/deleteCla/types';

const initialState = {
    result: null,
    loading: null,
};

const deleteCla = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case DELETE_CLA_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case DELETE_CLA_FAIL:
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

export default deleteCla;