import { configureStore } from '@reduxjs/toolkit'
import tempReducer from './features/temp/tempSlice'
import radiationReducer from './features/radiation/radiationSlice'
import humidityReducer from './features/humidity/humiditySlice'
import vpdReducer from './features/vpd/vpdSlice'
import nitrogenReducer from './features/nitrogen/nitrogenSlice'
import waterContentReducer from './features/waterContent/waterContentSlice'

export const store = configureStore({
    reducer: {
        temp: tempReducer,
        radiation: radiationReducer,
        humidity: humidityReducer,
        vpd: vpdReducer,
        nitrogen: nitrogenReducer,
        waterContent: waterContentReducer
    },
})