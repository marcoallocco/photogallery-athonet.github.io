import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./sagas";

import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
const store = configureStore({
    reducer: rootReducer, 
    middleware: [...middleware]
});
sagaMiddleware.run(rootSaga)
export default store;