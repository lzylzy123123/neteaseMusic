import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
       nickname:'nickname',
       sex:'1',
       birthday:'2004',
       city:'重庆',
       show:'无'
    },
    reducers: {
        changeNickName(state, action) {
            state.nickname=action.nickname
        },
        changeSex(state, action) {
            state.sex=action.sex
        },
        changeBirthday(state, action) {
            state.birthday=action.birthday
        },
        changeCity(state, action) {
            state.city=action.city
        },
        changeShow(state, action) {
            state.show=action.show
        }
    }
})

export const { changeNickName,changeBirthday,changeCity,changeSex,changeShow } = messageSlice.actions
export default messageSlice.reducer