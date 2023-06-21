import {
    CLASSES_SUCCESS,
    CLASSES_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/classes/types';

const initialState = {
    setClasses: null,
    loading: null,
};

const classes = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case CLASSES_SUCCESS:
            return {
                ...state,
                setClasses: payload,
                loading: false,
            }
        case CLASSES_FAIL:
            return {
                ...state,
                setClasses: null,
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

export default classes;