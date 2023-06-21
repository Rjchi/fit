import {
    PLANS_SUCCESS,
    PLANS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const plans = () => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/plans`);
        if (res.status === 200) {
            dispatch({
                type: PLANS_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: PLANS_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: PLANS_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}