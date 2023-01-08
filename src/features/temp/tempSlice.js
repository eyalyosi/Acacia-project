import { createSlice } from '@reduxjs/toolkit'

const initialState = 25

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        increaseTemp: (state, action) => {
            if (state >= 6 && state < 55) {
                return state = state + 1
            }
            return state
        },
        decreaseTemp: (state, action) => {
            if (state > 6 && state <= 55) {
                return state = state - 1
            }
            return state
        },
        setTemp: (state, action) => state = action.payload,
        resetTemp: (state) => state = initialState,
    }
})

export const { increaseTemp, decreaseTemp, setTemp, resetTemp } = tempSlice.actions
export const selectTemp = (state) => state.temp
export default tempSlice.reducer