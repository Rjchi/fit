import {
    CREATE_UP_SUCCESS,
    CREATE_UP_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const createP = (name, duracion) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/create_mem/${name}/${duracion}`);
        if (res.status === 200) {
            dispatch({
                type: CREATE_UP_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: CREATE_UP_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: CREATE_UP_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}