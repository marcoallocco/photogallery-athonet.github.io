import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/api'
import * as actions from '../slices/photoSlice'
function* getPhotos(action) {
    try {
        const response = yield call(api.fetchUsers, action.payload)
        //console.log(response.data.data)
        yield put(actions.getPhotosSuccess(response.data.data))
    } catch (error) {
        yield put(actions.getPhotosFailure());
    }
}
function* photoSaga() {
    yield takeEvery('photogallery/getPhotosStart', getPhotos);
}
export default photoSaga;