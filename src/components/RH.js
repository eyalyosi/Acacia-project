import { useSelector } from 'react-redux';
import { selectTemp } from '../features/temp/tempSlice'
import { selectHumidity } from '../features/humidity/humiditySlice'
import styled from 'styled-components'


const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
`

const H3 = styled.h3`
    margin: 0;
`

const RH = () => {

    const temp = useSelector(selectTemp)
    const rh = (-2.177 * temp) + 63.749

    return (
        <Section>
            <H3>Humidity RH %</H3>
            <H3>{rh.toFixed(1)}</H3>
            {/* <H3>{rh}</H3> */}
        </Section>
    )
}

export default RH