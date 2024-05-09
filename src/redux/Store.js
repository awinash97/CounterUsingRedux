import { combineSlices, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterFeature/CounterSlice'
import incrementInputReducer from './counterFeature/IncrementInputSlice'

// const rootReducers = combineSlices(counterReducer, incrementInputReducer)
const rootReducers = combineSlices({
    countme : counterReducer,
    incrementInputme : incrementInputReducer
})

export const store = configureStore({
    reducer : rootReducers,
})