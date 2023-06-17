import {
    DELETE_SUCCESS,
    DELETE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const delete_ = (customerId) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/delete_customer/${customerId}`);
        if (res.status === 200) {
            dispatch({
                type: DELETE_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: DELETE_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}