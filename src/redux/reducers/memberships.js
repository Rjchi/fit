import {
    MEMBERSHIPS_SUCCESS,
    MEMBERSHIPS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/memberships/types';

const initialState = {
    memberships: null,
    loading: null,
};

const memberships = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case MEMBERSHIPS_SUCCESS:
            return {
                ...state,
                memberships: payload,
                loading: false,
            }
        case MEMBERSHIPS_FAIL:
            return {
                ...state,
                memberships: null,
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

export default memberships;