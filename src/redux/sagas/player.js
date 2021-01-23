import {put, call, takeLatest, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../action/actionType';
import {apiCallPlayer,
        apiAddTitular,
        apiDeleteTitular,
        apiAddSubstitut,
        apiDeleteSubstitut} from '../api/index';

export function* getPlayer() {
    try {
       const result = yield call(apiCallPlayer, 'get', './data/data.json');
       yield put({
                   type: actionTypes.SUCCESS_GET_PLAYER,
                   result
                 })
    } catch (error) {
        yield put({
            type: actionTypes.ERROR_GET_PLAYER,
            error
        })
    }
};
/*Conjunto de generadores para agregar y eliminar un titular */
function* add_Titular (payload) {
    try {
        delete payload.type
        const titular = yield call(apiAddTitular,payload);
        yield put({
            type: actionTypes.ADD_TITULAR, 
            titular
        })
    } catch (error) {
        yield put({
            type: actionTypes.ERROR_ADD_TITULAR,
            error
        })
    }
};

function* delete_titular (payload) {
    delete payload.type
    try {
        const titular = yield call(apiDeleteTitular, payload);
        yield put({
            type: actionTypes.DELETE_TITULAR,
            titular
        })
    } catch (error) {
        yield put({
            type: actionTypes.ERROR_DELETE_TITULAR,
            error
        })
    }
}

/*Conjunto de generadores para agregar y eliminar un sustituto */
function* add_Substitut(payload){
    delete payload.type;
    try {
         const substitut = yield call(apiAddSubstitut, payload);
         yield put({
             type: actionTypes.ADD_SUBSTITUT,
             substitut
         })
    } catch (error) {
        yield put({
            type: actionTypes.ERROR_ADD_SUBSTITUT,
            error
        })
    }
}

function* delete_Substitut(payload){
    delete payload.type;
    try {
        const substitut = yield call(apiDeleteSubstitut, payload);
        yield put({
            type: actionTypes.DELETE_SUBSTITUT,
            substitut
        })
    } catch (error) {
        yield put({
            type: actionTypes.ERROR_DELETE_SUBSTITUT,
            error
        })
    }
}


export default function* players (){
    yield takeLatest(actionTypes.START_GET_PLAYER, getPlayer);
    yield takeEvery(actionTypes.ADD_TITULAR_REQUEST, add_Titular);
    yield takeEvery(actionTypes.DELETE_TITULAR_REQUEST, delete_titular);
    yield takeEvery(actionTypes.ADD_SUBSTITUT_REQUEST, add_Substitut);
    yield takeEvery(actionTypes.DELETE_SUBSTITUT_REQUEST, delete_Substitut);
}