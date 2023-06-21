import {
    CREATE_UC_SUCCESS,
    CREATE_UC_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const createC = (Nombre, Horario, Descripcion) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/create_class/${Nombre}/${Horario}/${Descripcion}`);
        if (res.status === 200) {
            dispatch({
                type: CREATE_UC_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: CREATE_UC_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: CREATE_UC_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}