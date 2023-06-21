import {
    MEMBERSHIPS_SUCCESS,
    MEMBERSHIPS_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const memberships = () => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/memberships`);
        if (res.status === 200) {
            dispatch({
                type: MEMBERSHIPS_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: MEMBERSHIPS_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: MEMBERSHIPS_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}