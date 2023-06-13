import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const signUp = (name, last_name, email, password, admin) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.post(`http://localhost:81/api/new_account/${name}/${last_name}/${email}/${password}/${admin}`);
        if (res.status === 200) {
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: SIGN_UP_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}