import {createStore} from 'redux';
import { data } from '../asset/data';

const initialState = {
    jugadores : data,
    titulares : [],
    suplentes : []
}

const reduxStore = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Titular":
          return {
              ...state,
              titulares : state.titulares.concat(action.jugador),
              jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
          }
        case "Add_Suplente" :
        return {
            ...state,
            suplentes : state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }  
        case "Delete_Titular":
          return {
              ...state,
              jugadores: state.jugadores.concat(action.titular),
              titulares: state.titulares.filter(j => j.id !== action.titular.id)
          }
        case "Delete_Suplente" :
        return {
            ...state,
            jugadores: state.jugadores.concat(action.suplente),
            suplentes: state.suplentes.filter(j => j.id !== action.suplente.id)
        }   
        default:
            return state;
    }
}

export default createStore(reduxStore);
