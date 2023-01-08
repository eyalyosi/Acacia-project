import { useSelector, useDispatch } from 'react-redux';
import { selectWaterContent, increaseWaterContent, decreaseWaterContent, setWaterContent } from '../features/waterContent/waterContentSlice'
import { ReactComponent as SoilWaterContent } from '../images/soil_water_content.svg';
import { ReactComponent as SoilWaterContentGrey } from '../images/soil_grey.svg';

import NumberField from './NumberField'

const WaterContentNumberField = () => {
    const dispatch = useDispatch();
    const waterContent = useSelector(selectWaterContent)
    const incWaterContent = () => {
        dispatch(increaseWaterContent())
    }

    const decWaterContent = () => {
        dispatch(decreaseWaterContent())
    }

    const changeWaterContent = (value) => {
        dispatch(setWaterContent(value))
    }
    return (
        <NumberField name="Soil Water Content" symbol="% VWC" value={waterContent} onPlus={incWaterContent} onMinus={decWaterContent} onChange={changeWaterContent} min={0} max={100} icon={<SoilWaterContent/>} greyIcon={<SoilWaterContentGrey/>}/>
    )
}

export default WaterContentNumberField