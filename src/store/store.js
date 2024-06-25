import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from './reducers/mediaReducer';

const store = configureStore({
    reducer: {
        media: mediaReducer,
        isPlaying: false
    }
})

export default store;