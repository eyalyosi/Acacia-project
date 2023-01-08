import { createSlice } from '@reduxjs/toolkit'

const initialState = 50

export const nitrogenSlice = createSlice({
    name: 'nitrogen',
    initialState,
    reducers: {
        // increaseNitrogen: (state, action) => state = state + 5,
        increaseNitrogen: (state, action) => {
            if (state >= 0 && state < 50) {
                return state = state + 5
            }
            return state
        },
        // decreaseNitrogen: (state, action) => state = state - 5,
        decreaseNitrogen: (state, action) => {
            if (state > 0 && state <= 50) {
                return state = state - 5
            }
            return state
        },
        setNitrogen: (state, action) => state = action.payload,
        resetNitrogen: (state) => state = initialState,
    }
})

export const { increaseNitrogen, decreaseNitrogen, setNitrogen, resetNitrogen } = nitrogenSlice.actions
export const selectNitrogen = (state) => state.nitrogen
export default nitrogenSlice.reducer