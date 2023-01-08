import { createSlice } from '@reduxjs/toolkit'

const initialState = 10

export const humiditySlice = createSlice({
    name: 'humidity',
    initialState,
    reducers: {
        // increaseHumidity: (state, action) => state = state + 5,
        increaseHumidity: (state, action) => {
            if (state >= 0 && state < 100) {
                return state = state + 5
            }
            return state
        },
        // decreaseHumidity: (state, action) => state = state - 5,
        decreaseHumidity: (state, action) => {
            if (state > 0 && state <= 100) {
                return state = state - 5
            }
            return state
        },
        setHumidity: (state, action) => state = action.payload,
        resetHumidity: (state) => state = initialState,
    }
})

export const { increaseHumidity, decreaseHumidity, setHumidity,resetHumidity } = humiditySlice.actions
export const selectHumidity = (state) => state.humidity
export default humiditySlice.reducer

