import {createStore, compose, applyMiddleware} from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas/index';
import * as actionTypes from '../action/actionType';

const initialState = {
    players : [],
    titular: [],
    substitut: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUCCESS_GET_PLAYER:
            return {
             ...state,
             players: action.result
            }
        case actionTypes.ERROR_GET_PLAYER :
            return {
                ...state,
                error: action.error
            } 
        case actionTypes.ADD_TITULAR:
            return{
                ...state,
                titular : state.titular.concat(action.titular.payload),
                players: state.players.filter(j => j.id !== action.titular.payload.id)
            }
        case actionTypes.ERROR_ADD_TITULAR:
                return{
                    ...state,
                    error: action.error
                }
        case actionTypes.DELETE_TITULAR:
            return{
                ...state,
                titular: state.titular.filter(j => j.id !== action.titular.payload.id),
                players: state.players.concat(action.titular.payload)
            }
        case actionTypes.ERROR_DELETE_TITULAR:
                return{
                    ...state,
                    error: action.error
                }
        case actionTypes.ADD_SUBSTITUT:
                    return{
                        ...state,
                        substitut : state.substitut.concat(action.substitut.payload),
                        players: state.players.filter(j => j.id !== action.substitut.payload.id)
                    }
        case actionTypes.ERROR_ADD_SUBSTITUT:
                        return{
                            ...state,
                            error: action.error
                        } 
        case actionTypes.DELETE_SUBSTITUT:
                    return{
                         ...state,
                         substitut: state.substitut.filter(j => j.id !== action.substitut.payload.id),
                         players: state.players.concat(action.substitut.payload)
                          }
        case actionTypes.ERROR_DELETE_SUBSTITUT:
                     return{
                             ...state,
                             error: action.error
                            }  
        default:
            return state;
    }
}
                         
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = reduxSaga();

export default  () => {
    return{ 
        ...createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}
