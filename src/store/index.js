import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./modules/music";
import leftSlice from './modules/left'
import MeSlice from './modules/me'
import messageSlice from './modules/message'
import ListSlice from './modules/playlist'
import DetailSlice from './modules/listdetail'
const store = configureStore({
    reducer: {
        music:musicSlice,
        leftwidth:leftSlice,
        me:MeSlice,
        message:messageSlice,
        playlist:ListSlice,
        Detail:DetailSlice
    }
})

export default store