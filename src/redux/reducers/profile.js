import {
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/profile/types';

const initialState = {
    e_profile: null,
    loading: null,
};

const profile = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                e_profile: payload,
                loading: false,
            }
        case EDIT_PROFILE_FAIL:
            return {
                ...state,
                e_profile: null,
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

export default profile;