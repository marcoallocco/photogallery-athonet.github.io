import { all } from 'redux-saga/effects'
import photoSaga from './photo';
function* rootSaga() {
    yield all([photoSaga()])
}

export default rootSaga;