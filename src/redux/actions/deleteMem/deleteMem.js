import {
    DELETE_MEM_SUCCESS,
    DELETE_MEM_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const deleteMem = (membershipId) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/delete_membership/${membershipId}`);
        if (res.status === 200) {
            dispatch({
                type: DELETE_MEM_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: DELETE_MEM_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_MEM_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}