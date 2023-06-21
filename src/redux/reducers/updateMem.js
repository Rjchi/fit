import {
    UPDATE_MEM_SUCCESS,
    UPDATE_MEM_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/updateMem/types';

const initialState = {
    result: null,
    loading: null,
};

const updateMem = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case UPDATE_MEM_SUCCESS:
            return {
                ...state,
                result: payload,
                loading: false,
            }
        case UPDATE_MEM_FAIL:
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

export default updateMem;