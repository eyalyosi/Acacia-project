import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectRadiation, increaseRad, decreaseRad, setRad } from '../features/radiation/radiationSlice'
import { ReactComponent as Radiation } from '../images/radiation.svg';
import { ReactComponent as RadiationIconGrey } from '../images/radiation_grey.svg';

import NumberField from './NumberField'

const RadiationSymbol = styled.div`
    font-size: 10px;
    font-family: "Merriweather";
    font-weight: 400;
`

const RadiationNumberField = () => {
    const dispatch = useDispatch();
    const radiation = useSelector(selectRadiation)

    const incRad = () => {
        dispatch(increaseRad())
    }

    const decRed = () => {
        dispatch(decreaseRad())
    }

    const changeRad = (value) => {
        dispatch(setRad(value))
    }
    return (
        <NumberField name="Radiation PAR" symbol={<RadiationSymbol>μmol m2/sec</RadiationSymbol>} value={radiation} onPlus={incRad} onMinus={decRed} onChange={changeRad} min={0} max={2500} icon={<Radiation/>} greyIcon={<RadiationIconGrey/>}/>
    )
}

export default RadiationNumberField