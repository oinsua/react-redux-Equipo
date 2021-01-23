import test from 'tape';
import {put, call} from 'redux-saga/effects';
import {getPlayer} from '../sagas/player';
import * as actionTypes from '../action/actionType';
import {apiCallPlayer} from '../api/index';

const result = [{}];

test('Get players Saga test', function(t) {
    const generator = getPlayer()
  
    let next = generator.next(actionTypes.START_GET_PLAYER)
    t.deepEqual(next.value, call(apiCallPlayer, 'get', './data/data.json'), 'must yield apiCallPlayer START_GET_PLAYER')
  
    next = generator.next(result);
    t.deepEqual(next.value, put({
                                  type: actionTypes.SUCCESS_GET_PLAYER,
                                  result
                                }), 'must yield actionstypes SUCCESS_GET_PLAYER')
  
    t.end()
  })