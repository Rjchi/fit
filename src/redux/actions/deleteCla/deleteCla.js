import {
    DELETE_CLA_SUCCESS,
    DELETE_CLA_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const deleteCla = (classId) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/delete_class/${classId}`);
        if (res.status === 200) {
            dispatch({
                type: DELETE_CLA_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: DELETE_CLA_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_CLA_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}