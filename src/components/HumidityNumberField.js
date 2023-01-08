import { useSelector, useDispatch } from 'react-redux';
import { selectHumidity, increaseHumidity, decreaseHumidity, setHumidity } from '../features/humidity/humiditySlice'
import { ReactComponent as HumidityIcon } from '../images/humidity.svg';
import { ReactComponent as HumidityIconGrey } from '../images/humidity_grey.svg';

import NumberField from './NumberField'

const HumidityNumberField = () => {
    const dispatch = useDispatch();
    const humidity = useSelector(selectHumidity)

    const incHumidity = () => {
        dispatch(increaseHumidity())
    }

    const decHumidity = () => {
        dispatch(decreaseHumidity())
    }

    const changeHumidity = (value) => {
        dispatch(setHumidity(value))
    }
    return (
        <NumberField name="Relative Humidity" symbol="%" value={humidity} onPlus={incHumidity} onMinus={decHumidity} onChange={changeHumidity} min={0} max={100} icon={<HumidityIcon/>} greyIcon={<HumidityIconGrey/>}/>
    )
}

export default HumidityNumberField