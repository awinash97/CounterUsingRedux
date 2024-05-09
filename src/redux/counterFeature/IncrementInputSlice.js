import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}

export const incrementInputSlice = createSlice({
    name : 'incrementInput',
    initialState,
    reducers : {
        ADD_INPUT : (state, action) => {
            state.value = action.payload
        },
    },
})

export const {ADD_INPUT} = incrementInputSlice.actions

// export const inputValue = (state) => state.value
export const inputValue = (state) => state.incrementInputme.value

export default incrementInputSlice.reducer