import {
    CUSTOMERS_SUCCESS,
    CUSTOMERS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from '../actions/customers/types';

const initialState = {
    customers: null,
    loading: null,
};

const customers = (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: payload,
                loading: false,
            }
        case CUSTOMERS_FAIL:
            return {
                ...state,
                customers: null,
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

export default customers;