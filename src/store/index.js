import { configureStore} from "@reduxjs/toolkit";
import { songsReducer,addSong,removeSong } from "./slices/songSlices";
import {moviesReducer, addMovie,removeMovie } from "./slices/movieSlices";



const store=configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});



export {store,addMovie,addSong,removeMovie,removeSong};
