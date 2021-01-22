//constantes
export const dataInitial = {
    jugadores: [],
    titulares: [],
    suplentes: []
}
const SUCCESS_JUGADOR = "SUCCESS_JUGADOR";
const ADD_TITULAR = 'ADD_TITULAR';
const DELETE_TITULAR = 'DELETE_TITULAR';
const DELETE_SUPLENTE = 'DELETE_SUPLENTE';
const ADD_SUPLENTE = 'ADD_SUPLENTE';

//reducers
export function jugadorReducer (state = dataInitial, action) {
    switch (action.type) {
        case SUCCESS_JUGADOR:
           return {
               ...state,
               jugadores: action.payload
           }
        case ADD_TITULAR:
            return{
                ...state,
                titulares : state.titulares.concat(action.payload),
                jugadores: state.jugadores.filter(j => j.id !== action.payload.id)
            }
            case ADD_SUPLENTE:
                return{
                    ...state,
                    suplentes : state.suplentes.concat(action.payload),
                    jugadores: state.jugadores.filter(j => j.id !== action.payload.id)
                }
            case DELETE_TITULAR:
                return {
                    ...state,
                    jugadores: state.jugadores.concat(action.payload),
                    titulares: state.titulares.filter(j => j.id !== action.payload.id)
                }
            case DELETE_SUPLENTE:
                return {
                    ...state,
                    jugadores: state.jugadores.concat(action.payload),
                    suplentes: state.suplentes.filter(j => j.id !== action.payload.id)
                }
        default:
            return state;
    }
}

//actions               
/* Function que se encagar de devolver los item de la data. 
   () => (dispatch, getState) =>
   el primero () va a recibir los parametros que se envian desde la vista
   el segundo a traves del dispatch se activa el reducer, y a traves del getState accede a dataInitial
*/
export const getPlayer = (url) => async (dispatch, getState) => {

    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({
            type: SUCCESS_JUGADOR,
            payload: data
        })
    } catch (error) {
        console.log('Error', error);
    }
} 

export const addTitular = (item) => (dispatch, getState) => {

        dispatch({
            type: ADD_TITULAR,
            payload: item
        })
}

export const addSuplente = (item) => (dispatch, getState) => {
         
     dispatch({
             type: ADD_SUPLENTE,
             payload: item
         })
 }

 export const deleteTitular = (item) => (dispatch, getState) => {

    dispatch({
        type: DELETE_TITULAR,
        payload: item
    })
}

 export const deleteSuplente = (item) => (dispatch, getState) => {
         
    dispatch({
            type: DELETE_SUPLENTE,
            payload: item
        })
}