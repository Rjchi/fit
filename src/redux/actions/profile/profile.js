import {
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const profile = (id, name, last_name, email, password, admin) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/profile/${id}/${name}/${last_name}/${email}/${password}/${admin}`);
        if (res.status === 200) {
            dispatch({
                type: EDIT_PROFILE_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: EDIT_PROFILE_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: EDIT_PROFILE_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}