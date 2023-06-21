import {
    CLASSES_LIST_SUCCESS,
    CLASSES_LIST_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/classesList/types';

const initialState = {
    classesList: null,
    loading: null,
};

const classesList = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case CLASSES_LIST_SUCCESS:
            return {
                ...state,
                classesList: payload,
                loading: false,
            }
        case CLASSES_LIST_FAIL:
            return {
                ...state,
                classesList: null,
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

export default classesList;