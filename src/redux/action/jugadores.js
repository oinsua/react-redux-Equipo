import * as actionTypes from './actionType';

/*Conjunto de acciones para recuperar los jugadores de la API */
export const startGetPlayer = (payload) => ({
         type: actionTypes.START_GET_PLAYER,
         ...payload
});

export const ErrorGetPlayer = (payload) => ({
    type: actionTypes.ERROR_GET_PLAYER,
    ...payload
});

export const successGetPlayer = (payload) => ({
    type: actionTypes.SUCCESS_GET_PLAYER,
    ...payload
});

/*Conjunto de acciones para agregar  y eliminar jugadores a titular  */

export const addTitular = (payload) => ({
     type: actionTypes.ADD_TITULAR_REQUEST,
     payload
});

export const deleteTitular = (payload) => ({
    type: actionTypes.DELETE_TITULAR_REQUEST,
    payload
});

/*Conjunto de acciones para agregar  y eliminar jugadores a titular  */

export const addSubstitut = (payload) => ({
    type: actionTypes.ADD_SUBSTITUT_REQUEST,
    payload
});

export const deleteSubstitut = (payload) => ({
   type: actionTypes.DELETE_SUBSTITUT_REQUEST,
   payload
});

