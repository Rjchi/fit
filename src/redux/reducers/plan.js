import {
    PLANS_SUCCESS,
    PLANS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/plan/types';

const initialState = {
    setPlans: null,
    loading: null,
};

const plan = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case PLANS_SUCCESS:
            return {
                ...state,
                setPlans: payload,
                loading: false,
            }
        case PLANS_FAIL:
            return {
                ...state,
                setPlans: null,
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

export default plan;