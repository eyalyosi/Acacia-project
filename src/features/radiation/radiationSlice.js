import { createSlice } from '@reduxjs/toolkit'

const initialState = 200

export const radiationSlice = createSlice({
    name: 'radiation',
    initialState,
    reducers: {
        // increaseRad: (state, action) => state = state + 50,
        increaseRad: (state, action) => {
            if (state >= 0 && state < 2500) {
                return state = state + 50
            }
            return state
        },
        // decreaseRad: (state, action) => state = state - 50,
        decreaseRad: (state, action) => {
            if (state > 0 && state <= 2500) {
                return state = state - 50
            }
            return state
        },
        setRad: (state, action) => state = action.payload,
        resetRad: (state) => state = initialState,
    }
})

export const { increaseRad, decreaseRad, setRad,resetRad } = radiationSlice.actions
export const selectRadiation = (state) => state.radiation
export default radiationSlice.reducer

