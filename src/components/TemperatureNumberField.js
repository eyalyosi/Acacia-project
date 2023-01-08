import { useSelector, useDispatch } from 'react-redux';
import { selectTemp, increaseTemp, decreaseTemp, setTemp } from '../features/temp/tempSlice'
import { ReactComponent as TempIcon } from '../images/temp.svg';
import { ReactComponent as TempIconGrey } from '../images/temp_grey.svg';

import NumberField from './NumberField'

const TemperatureNumberField = () => {
    const dispatch = useDispatch();
    const temp = useSelector(selectTemp)

    const incTemp = () => {
        dispatch(increaseTemp())
    }

    const decTemp = () => {
        dispatch(decreaseTemp())
    }

    const changeTemp = (value) => {
        dispatch(setTemp(value))
    }
    return (
        <NumberField name="Temperature" symbol="C°" value={temp} onPlus={incTemp} onMinus={decTemp} onChange={changeTemp} min="6" max="55" icon={<TempIcon/>} greyIcon={<TempIconGrey/>} />
    )
}

export default TemperatureNumberField