import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        audioTitle: '',
        audioSource: '',
        isPlaying: false,
        audioRef: undefined,
    },
    reducers: {
        setAudioTitle: (state, action) => {
            state.audioTitle = action.payload;
        },
        setAudioSource: (state, action) => {
            state.audioSource = action.payload;
            console.log('setAudioSource dispatched. New state:', state.audioSource);
        },
        toggleIsPlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        setAudioRef: (state, action) => {
            state.audioRef = action.payload;
        }
    }
});

export const {
    setAudioTitle,
    setAudioSource,
    toggleIsPlaying,
    setAudioRef
} = mediaSlice.actions;

export default mediaSlice.reducer;
