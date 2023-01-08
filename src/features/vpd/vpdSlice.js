import { createSlice } from '@reduxjs/toolkit'

const initialState = 10

export const vpdSlice = createSlice({
    name: 'vpd',
    initialState,
    reducers: {
        increaseVpd: (state, action) => state = state + 0.2,
        decreaseVpd: (state, action) => state = state - 0.2,
        setVpd: (state, action) => state = action.payload, 
    }
})

export const { increaseVpd, decreaseVpd, setVpd } = vpdSlice.actions
export const selectVpd = (state) => state.vpd
export default vpdSlice.reducer