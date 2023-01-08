import Button from "./Button"
import styled from 'styled-components'
import { ReactComponent as ArrowUp } from '../images/arrow_up.svg';
import { ReactComponent as ArrowUpGrey } from '../images/arrow_up_grey.svg';
import { ReactComponent as ArrowDown } from '../images/arrow_down.svg';
import { ReactComponent as ArrowDownGrey } from '../images/arrow_down_grey.svg';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap:12px;
    justify-content: center;
    align-items: center;
`
const Text = styled.span`
    color: #A2A199;
    font-family: "Merriweather_Sans";    
    font-size: 14px;
`
const Icon = styled.div`
    display:none;
    width: 24px;
    height: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    padding: 0px;
    gap: 12px;
`

const Value = styled.div`
    line-height: 140%;
    font-family: "Open_Sans";
`

const Symbol = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #A2A199;
`

const ButtonsAction = styled.div`
    display: flex;
    border: 1px solid #CCD7DD;
    border-radius: 2px;
    & :hover {
        cursor: pointer;
    }
`

const ButtonUp = styled.button`
    border: none;
    background: transparent;
    & :hover {
        background: #CCD7DD;
    }
`

const ArrowButton = styled.button`
    border: none;
    background: transparent;
    width: 36px;
    height: 36px;
    padding: 0px;
    &:hover {
        background: #CCD7DD;
    }
`

const Input = styled.input`
    text-align: center;
    background: transparent;
    border:none;
    font-weight: 700;
    font-size: 24px;
    color: #484A43;

`

const GreyIcon = styled.div`
    width: 24px;
    height: 24px;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    padding: 16px;
    background-color: #F3F5F7;
    border-radius: 4px;
    border: 1px solid rgba(204, 215, 221, 0.35);
    &:hover ${GreyIcon} {
        display:none;
    }
    &:hover ${Icon} {
        display:flex;
    }
    &:hover {
        background: #FFFFFF;
    }
    &:hover ${Text}  {
        color: #57595E;
    }
`

const NumberField = ({ name, value, onPlus, onMinus, onChange, min, max, icon, greyIcon, symbol }) => {

    return (
        <Section>
            <Header>
                <Icon>
                    {icon}
                </Icon>
                <GreyIcon>
                    {greyIcon}
                </GreyIcon>
                <Text>
                    {name}
                </Text>
            </Header>
            <Content>
                <Value>
                    <Input type="number" className="Buttons__input" value={value} min={min} max={max} onChange={(event) => onChange(+event.target.value)} />
                </Value>
                <Symbol>
                    {symbol}
                </Symbol>
            </Content>
            <ButtonsAction>
                <ArrowButton onClick={() => onPlus()}>
                    <ArrowUp />
                </ArrowButton>
                <ArrowButton onClick={() => onMinus()}>
                    <ArrowDown />
                </ArrowButton>
            </ButtonsAction>
            {/* if (min <= value && value <= max) {
                 onChange(+event.target.value)
                } */}
        </Section>

    )
}

export default NumberField