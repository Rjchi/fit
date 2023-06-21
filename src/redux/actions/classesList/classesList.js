import {
    CLASSES_LIST_SUCCESS,
    CLASSES_LIST_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const classesList = () => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/classes`);
        if (res.status === 200) {
            dispatch({
                type: CLASSES_LIST_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: CLASSES_LIST_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: CLASSES_LIST_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}