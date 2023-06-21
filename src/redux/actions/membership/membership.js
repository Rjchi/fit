import {
    MEMBERSHIP_SUCCESS,
    MEMBERSHIP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const membership = (customerId) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/show_membership/${customerId}`);
        if (res.status === 200) {
            dispatch({
                type: MEMBERSHIP_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: MEMBERSHIP_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: MEMBERSHIP_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}