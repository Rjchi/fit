import {
    UPDATE_CLA_SUCCESS,
    UPDATE_CLA_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const updateCla = (classId, name, horary, description) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/update_class/${classId}/${name}/${horary}/${description}`);
        if (res.status === 200) {
            dispatch({
                type: UPDATE_CLA_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: UPDATE_CLA_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_CLA_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}