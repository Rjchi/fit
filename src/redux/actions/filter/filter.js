import {
    FILTER_SUCCESS,
    FILTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const filter = (word) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/filter?name=${word}`);
        if (res.status === 200) {
            dispatch({
                type: FILTER_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: FILTER_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: FILTER_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}