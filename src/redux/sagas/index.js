import players from './player';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
   yield all([
       players()
   ]);
};