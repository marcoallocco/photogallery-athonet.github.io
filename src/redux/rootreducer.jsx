import { combineReducers } from "redux";
import photoReducer from "./slices/photoSlice";
const rootReducer = combineReducers({
    photogallery: photoReducer,
})

export default rootReducer;