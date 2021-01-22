//constante
export const dataInitialTitular = {
    titulares: []
}
const ADD_TITULAR = 'ADD_TITULAR';
const DELETE_TITULAR = 'DELETE_TITULAR';

//reducers
export default function titularReducer (state = dataInitialTitular, action) {
    console.log('state initial', state);
    
    switch (action.type) {
        case ADD_TITULAR:
            return{
                ...state,
                titulares : action.payload.titulares.concat(action.payload.item),
                jugadores: action.payload.jugadores.filter(j => j.id !== action.payload.item.id)
            }
        default:
            return state;
    }
}

//actions
export const addTitular = (item) => (dispatch, getState) => {
    console.log('getState', getState())
    console.log('jugadores', getState().jugadores.jugadores)
    console.log(item);
        dispatch({
            type: ADD_TITULAR,
            payload: {
                item,
                jugadores: getState().jugadores.jugadores,
                titulares: getState().titulares.titulares
            }
        })
}