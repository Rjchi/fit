import {
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';

import axios from "axios";

export const update = (customerId, Nombre, Apellido, CorreoElectronico, contrasenia, Admin) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await axios.get(`http://localhost:81/api/update_customer/${customerId}/${Nombre}/${Apellido}/${CorreoElectronico}/${contrasenia}/${Admin}`);
        if (res.status === 200) {
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
        else {
            dispatch({
                type: UPDATE_FAIL,
            });

            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_FAIL,
        });

        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    }
}