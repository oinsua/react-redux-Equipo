import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//Importar los reducer
import {jugadorReducer} from './jugador';

const rootReducer = combineReducers({
    jugadores : jugadorReducer
})
                         
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore () {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
