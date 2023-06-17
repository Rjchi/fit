import {
    UPDATE_MEM_SUCCESS,
    UPDATE_MEM_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const updateMem = (membershipId, Nombre, Duracion) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/update_membership/${membershipId}/${Nombre}/${Duracion}`);
        if (res.status === 200) {
            dispatch({
                type: UPDATE_MEM_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: UPDATE_MEM_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_MEM_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}