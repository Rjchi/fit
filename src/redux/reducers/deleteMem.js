import {
    DELETE_MEM_SUCCESS,
    DELETE_MEM_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/deleteMem/types';

const initialState = {
    result: null,
    loading: null,
};

const deleteMem = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case DELETE_MEM_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case DELETE_MEM_FAIL:
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

export default deleteMem;