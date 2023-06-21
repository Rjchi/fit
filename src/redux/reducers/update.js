import {
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/update/types';

const initialState = {
    result: null,
    loading: null,
};

const update = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case UPDATE_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case UPDATE_FAIL:
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

export default update;