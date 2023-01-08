import { createSlice } from '@reduxjs/toolkit'

const initialState = 50

export const waterContentSlice = createSlice({
    name: 'waterContent',
    initialState,
    reducers: {
        // increaseWaterContent: (state, action) => state = state + 1,
        increaseWaterContent: (state, action) => {
            if (state >= 0 && state < 100) {
                return state = state + 1
            }
            return state
        },
        // decreaseWaterContent: (state, action) => state = state - 1,
        decreaseWaterContent: (state, action) => {
            if (state > 0 && state <= 100) {
                return state = state - 1
            }
            return state
        },
        setWaterContent: (state, action) => state = action.payload,
        resetWaterContent: (state) => state = initialState,
    }
})

export const { increaseWaterContent, decreaseWaterContent, setWaterContent, resetWaterContent } = waterContentSlice.actions
export const selectWaterContent = (state) => state.waterContent
export default waterContentSlice.reducer