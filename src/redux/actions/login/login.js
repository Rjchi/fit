import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const login = (email, password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.post(`http://localhost:81/api/login/${email}/${password}`);
        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}