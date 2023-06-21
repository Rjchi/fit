import {
    MEMBERSHIP_SUCCESS,
    MEMBERSHIP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/membership/types';

const initialState = {
    membership: null,
    loading: null,
};

const membership = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case MEMBERSHIP_SUCCESS:
            return {
                ...state,
                membership: payload,
                loading: false,
            }
        case MEMBERSHIP_FAIL:
            return {
                ...state,
                membership: null,
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

export default membership;