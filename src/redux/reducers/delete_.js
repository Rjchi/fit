import {
    DELETE_SUCCESS,
    DELETE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/delete/types';

const initialState = {
    result: null,
    loading: null,
};

const delete_ = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case DELETE_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case DELETE_FAIL:
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

export default delete_;