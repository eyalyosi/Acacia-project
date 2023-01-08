
import { selectTemp } from '../features/temp/tempSlice'
import { selectHumidity } from '../features/humidity/humiditySlice'

export const selectVpd = (state) => {

    const temp = selectTemp(state)
    const humidity = selectHumidity(state)
    const vpd = ((1 - humidity / 100) / 1000) * 610.7 * (10 ** ((7.5 * temp) / (237.3 + temp)))
    return vpd
}
