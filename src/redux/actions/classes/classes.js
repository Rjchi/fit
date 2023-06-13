import {
    CLASSES_SUCCESS,
    CLASSES_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const classes = (customerId) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/class/${customerId}`);
        if (res.status === 200) {
            dispatch({
                type: CLASSES_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: CLASSES_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: CLASSES_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}