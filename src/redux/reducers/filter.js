import {
    FILTER_SUCCESS,
    FILTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/filter/types';

const initialState = {
    plan: null,
    loading: null,
};

const filter = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case FILTER_SUCCESS:
            return {
                ...state,
                plan: payload,
                loading: false,
            }
        case FILTER_FAIL:
            return {
                ...state,
                plan: null,
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

export default filter;