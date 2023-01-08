import { useSelector, useDispatch } from 'react-redux';
import { selectNitrogen, increaseNitrogen, decreaseNitrogen, setNitrogen } from '../features/nitrogen/nitrogenSlice'
import { ReactComponent as Nitrogen } from '../images/nitrogen.svg';
import { ReactComponent as NitrogenIconGrey } from '../images/nitrogen_grey.svg';
import NumberField from './NumberField'

const NitrogenNumberField = () => {
    const dispatch = useDispatch();
    const nitrogen = useSelector(selectNitrogen)

    const incN = () => {
        dispatch(increaseNitrogen())
    }

    const decN = () => {
        dispatch(decreaseNitrogen())
    }

    const changeN = (value) => {
        dispatch(setNitrogen(value))
    }
    return (
        <NumberField name="Soil Nitrogen" symbol="ppm" value={nitrogen} onPlus={incN} onMinus={decN} onChange={changeN} min={0} max={50} icon={<Nitrogen />} greyIcon={<NitrogenIconGrey />} />
    )
}

export default NitrogenNumberField