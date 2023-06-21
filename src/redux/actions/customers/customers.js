import {
    CUSTOMERS_SUCCESS,
    CUSTOMERS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const customers = () => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/customers`);
        if (res.status === 200) {
            dispatch({
                type: CUSTOMERS_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: CUSTOMERS_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: CUSTOMERS_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}