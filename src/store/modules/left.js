import { createSlice } from "@reduxjs/toolkit";

const leftSlice = createSlice({
    name: "left",
    initialState: {
        width: "0px",
    },
    reducers: {
        changeWidth(state, action) {
            if (state.width === "0px") {
                state.width = "300px"
            }
            else {
                state.width = "0px"
            }
        }
    }
})

export const { changeWidth } = leftSlice.actions
export default leftSlice.reducer