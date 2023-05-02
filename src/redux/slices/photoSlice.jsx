import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    photos: [],
    loading: false,
    error: false,
    urlAfter: "",
    querySaved: "",
    favourites: []
}
const photoSlice = createSlice({
    name: 'photogallery',
    initialState,
    reducers:{
        getPhotosStart: (state, action) =>{
            state.querySaved = action.payload.query;
            state.loading = true;
        },
        getPhotosSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.urlAfter = action.payload.after;
            state.photos = state.photos.concat(action.payload.children)
        },
        getPhotosFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        resetPhoto: (state) => {
            state.photos = [];
            state.urlAfter = "";
            state.querySaved = "";
        },
        savePhoto: (state, action) => {
            state.favourites = state.favourites.concat(action.payload)
        },
        deletePhoto: (state, action) => {
            const removeIndex = state.favourites.findIndex( item => item.data.thumbnail === action.payload.data.thumbnail );
            state.favourites.splice( removeIndex, 1 );
        },
        resetFavs: (state) => {
            state.favourites = [];
        }
    }
})

const photoReducer = photoSlice.reducer;
export const {getPhotosStart, getPhotosSuccess, getPhotosFailure, resetPhoto, savePhoto, deletePhoto,resetFavs} = photoSlice.actions;
export default photoReducer