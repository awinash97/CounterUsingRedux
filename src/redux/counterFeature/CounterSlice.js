import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        INCREMENT : (state) => {
            state.value = state.value + 1
        },
        DECREMENT : (state) => {
            state.value = state.value - 1
        },
        INCREMENT_BY_AMOUNT : (state , action) => {
            state.value = state.value + action.payload
        },
        DECREMENT_BY_AMOUNT : (state , action) => {
            state.value = state.value - action.payload
        },
    },
})

export const { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, DECREMENT_BY_AMOUNT } = counterSlice.actions

// we can do here also and do import in app.js or the file needed
export const selectCount = (state) => state.countme.value    

export default counterSlice.reducer