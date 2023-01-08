import styled from 'styled-components'
import { ReactComponent as ResetIcon } from '../images/reset.svg';
import { ReactComponent as ResetIconGrey } from '../images/reset_grey.svg';
import { useDispatch } from 'react-redux';
import { resetHumidity } from '../features/humidity/humiditySlice'
import { resetNitrogen } from '../features/nitrogen/nitrogenSlice'
import { resetRad } from '../features/radiation/radiationSlice'
import { resetTemp } from '../features/temp/tempSlice'
import { resetWaterContent } from '../features/waterContent/waterContentSlice'

const Icon = styled.div`
    display: flex;
`

const HoverIcon = styled.div`
    display: none;
`

const Button = styled.button`
    background: #F3F5F7;
    color: #A2A199;
    border-radius: 4px;
    border:none;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 8px 32px;
    gap:6px;
    cursor: pointer;
    &:hover  ${Icon} {
        display:none;
    }
    &:hover  ${HoverIcon} {
        display:flex;
    }
    &:hover {
        background: #FFFFFF;
        color: #484A43;
    }
`
const Text = styled.span`
    display: flex;
    align-items:center;
    font-size: 14px;
    font-family: "Merriweather_Sans";
`

const Reset = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(resetHumidity())
        dispatch(resetNitrogen())
        dispatch(resetRad())
        dispatch(resetTemp())
        dispatch(resetWaterContent())
    }

    return (
        <Button onClick={onClick}>
            <Icon>
                <ResetIconGrey />
            </Icon>
            <HoverIcon>
                <ResetIcon />
            </HoverIcon>
            <Text>Reset All</Text>
        </Button>
    )
}

export default Reset