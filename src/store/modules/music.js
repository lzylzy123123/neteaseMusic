import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        musicname: "醉赤壁",
        musicimg: "#",
        musicdata: []
    },
    reducers: {
        changemusic(state, action) {
            state.musicname = action.musicname
            state.musicimg = action.musicimg
            state.musicdata = action.musicdata
        }
    }
})

export const { changemusic } = musicSlice.actions
export default musicSlice.reducer